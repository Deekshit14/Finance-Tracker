import { toast } from "sonner"; 
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.transactions.$post>;
type RequestType = InferRequestType<typeof client.api.transactions.$post>["json"];

export const useCreateTransaction = () => {
     const queryClient = useQueryClient();

     const mutation = useMutation<
          ResponseType,
          Error,
          RequestType
     > ( {
          mutationFn: async (json) => {
               const response = await client.api.transactions.$post( { json } );
               return await response.json();
          },

          onSuccess: () => {
               toast.success("Transaction created");
               queryClient.invalidateQueries( { queryKey: ["transactions"] } );
               queryClient.invalidateQueries( { queryKey: ["summary"] } );
          },

          // onError: () => {
          //      toast.error("Failded to create trasaction");
          // },
          onError: (error: Error) => {
               console.error("Error details:", error);
          
               // Check for specific error types or messages
               if (error instanceof Response) {
                    if (!error.ok && error.status === 500) {
                         toast.error("Database is unavailable. Please try again later.");
                    } else if (error.status === 404) {
                         toast.error("API endpoint not found.");
                    } else {
                         toast.error(`Unexpected error occurred: ${error.statusText}`);
                    }
               } else {
                    toast.error("Failed to create transaction. Please check your network connection.");
               }
          },          
     });

     return mutation;
};