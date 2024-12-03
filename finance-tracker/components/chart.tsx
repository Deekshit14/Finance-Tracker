import { useState } from "react";
import { AreaChart, BarChart, FileSearch, LineChart } from "lucide-react";

import {
     Select,
     SelectTrigger,
     SelectContent,
     SelectValue,
     SelectItem
} from "@/components/ui/select";

import {
     Card,
     CardContent,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { AreaVariant } from "@/components/area-variant";
import { BarVariant } from "@/components/bar-variant";
import { LineVariant } from "@/components/line-variant";

type Props = {
     data?: {
          date: string;
          income: number;
          expenses: number;
     }[];
};

export const Chart = ( { data = [] }: Props ) => {
     const [chartType, setChartType] = useState("area");

     const onTypeChange = (type: string) => {
          setChartType(type);
     };

     return (
          <Card className = "bg-[#142a55] border-none drop-shadow-sm border border-gray-400 shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-lg">
               <CardHeader className = "flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                    <CardTitle className = "text-xl line-clamp-1 text-white">
                         Transactions
                    </CardTitle>
                    <Select
                         defaultValue = {chartType}
                         onValueChange = {onTypeChange}
                    >
                         <SelectTrigger className = "lg:w-auto h-9 rounded-md px-3">
                              <SelectValue placeholder = "Chart type" />
                         </SelectTrigger>
                         <SelectContent>
                              <SelectItem value = "area">
                                   <div className = "flex items-center">
                                        <AreaChart className = "size-4 mr-2 shrink-0"/>
                                        <p className = "line-clamp-1">
                                             Area chart
                                        </p>
                                   </div>
                              </SelectItem>
                              
                              <SelectItem value = "line">
                                   <div className = "flex items-center">
                                        <LineChart className = "size-4 mr-2 shrink-0"/>
                                        <p className = "line-clamp-1">
                                             Line chart
                                        </p>
                                   </div>
                              </SelectItem>

                              <SelectItem value = "bar">
                                   <div className = "flex items-center">
                                        <BarChart className = "size-4 mr-2 shrink-0"/>
                                        <p className = "line-clamp-1">
                                             Bar chart
                                        </p>
                                   </div>
                              </SelectItem>

                         </SelectContent>
                    </Select>
               </CardHeader>
               <CardContent>
                    {data.length === 0 ? (
                         <div className = "flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                              <FileSearch className = "size-6 text-muted-foreground" />
                              <p className = "text-muted-foreground text-sm">
                                   No data for this period!! Add Transaction Details
                              </p>
                         </div>
                    ) : (
                         <>
                              { chartType === "line" && <LineVariant data = {data} /> }
                              { chartType === "area" && <AreaVariant data = {data} /> }
                              { chartType === "bar" && <BarVariant data = {data} /> }
                         </>
                    )}
               </CardContent>
          </Card>
     );
};