import { IconType } from "react-icons";
import { VariantProps, cva } from "class-variance-authority";

import { cn, formatCurrency, formatPercentage } from "@/lib/utils";
import { CountUp } from "@/components/count-up";
import { 
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";

const boxVariant = cva(
     "shrink-0 rounded-md p-3",
     {
          variants: {
               variant: {
                    default: "bg-blue-700/40",
                    success: "bg-emerald-700/40",
                    danger: "bg-rose-700/40",
                    warning: "bg-yellow-500/20",
               }
          },
          defaultVariants: {
               variant: "default",
          },
     },
);

const iconVariant = cva(
     "size-6",
     {
          variants: {
               variant: {
                    default: "fill-blue-300",
                    success: "fill-emerald-300",
                    danger: "fill-rose-300",
                    warning: "fill-yellow-300",
               }
          },
          defaultVariants: {
               variant: "default",
          },
     },
);

type BoxVariants = VariantProps<typeof boxVariant>;
type IconVariants = VariantProps<typeof iconVariant>;

interface DataCardProps extends BoxVariants, IconVariants {
     icon: IconType;
     title: string;
     value?: number;
     dateRange: string;
     percentageChange?: number; 
};

export const DataCard = ( {
     icon: Icon,
     title,
     value = 0,
     variant,
     dateRange,
     percentageChange = 0,
}: DataCardProps ) => {
     return (
          // <Card className = "border-none drop-shadow-sm border border-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-lg">
          <Card className={cn(
               title === "Income"
                 ? "bg-gradient-to-r from-[#818cf8] via-[#3b82f6] to-[#4f46e5]" // success background for Income
                 : title === "Expenses"
                 ? "bg-gradient-to-r from-[#fda4af]  to-[#f43f5e]"  // danger background for Expenses
                 : "bg-gradient-to-r from-[#4aca79] via-[#14b8a6] to-[#16a9ce]",  // default background
               "border-none drop-shadow-sm border border-gray-400 shadow-[0_4px_10px_rgba(0,0,0,0.5)] rounded-lg"
             )}
          >
               <CardHeader className = "flex flex-row items-center justify-between gap-x-4">
               <div className = "space-y-2">
                    <CardTitle className = "text-2xl line-clamp-1 text-black">
                         {title}
                    </CardTitle>
                    <CardDescription className = "line-clamp-1 text-[hsl(215.4deg_18.73%_32.75%)]">
                         {dateRange}
                    </CardDescription>
               </div>
               <div className = { cn( boxVariant( { variant } ) ) } >
                    <Icon className = { cn(iconVariant( { variant } ) ) } />
               </div>
               </CardHeader>
               <CardContent>
                    <h1 className = "font-bold text-2xl mb-2 line-clamp-1 break-all">
                         <CountUp 
                              preserveValue
                              start = {0}
                              end = {value}
                              decimals = {2}
                              decimalPlaces = {2}
                              formattingFn = {formatCurrency}
                         />
                    </h1>
                    <p className = {cn(
                         // "text-muted-foreground text-sm line-clamp-1",
                         "text-[hsl(215.4deg_18.73%_32.75%)]",
                         // percentageChange > 0 && "text-[#2A00BF]",
                         // percentageChange < 0 && "text-rose-700",
                    )}>
                         {/* {formatPercentage(percentageChange, { addPrefix: true } )} from last period */}
                    </p>
               </CardContent>
          </Card>
     );
};