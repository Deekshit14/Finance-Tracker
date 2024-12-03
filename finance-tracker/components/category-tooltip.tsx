import { format } from "date-fns";

import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const CategoryTooltip = ( { active, payload }: any ) => {
     if (!active)
          return null;

     const name = payload[0].payload.name;
     const value = payload[0].value;

     return (
          <div className = "rounded-sm shadow-sm border overflow-hidden">
               <div className = "bg-gray-200 text-sm p-2 px-3 bg-muted text-muted-foreground">
                    {name}
               </div>
               <Separator />
               <div className = "bg-gray-100 p-2 px-3 space-y-1">
                    <div className = "flex items-center justify-between gap-x-4">
                         <div className = "items-center gap-x-2">
                              <p className = "text-sm text-rose-600 text-muted-foreground">
                                   Expenses
                              </p>
                         </div>
                         <p className = "text-sm text-right font-medium">
                              {formatCurrency(value * -1)}
                         </p>
                    </div>
               </div>
          </div>
     );
};