import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  gradient?: boolean;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  className,
  gradient = false 
}: StatsCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
      gradient && "bg-gradient-primary text-white border-0",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          "text-sm font-medium",
          gradient ? "text-white/90" : "text-muted-foreground"
        )}>
          {title}
        </CardTitle>
        {Icon && (
          <Icon className={cn(
            "h-4 w-4",
            gradient ? "text-white/80" : "text-muted-foreground"
          )} />
        )}
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-2xl font-bold",
          gradient ? "text-white" : "text-foreground"
        )}>
          {value}
        </div>
        {(description || trend) && (
          <div className="flex items-center gap-2 mt-2">
            {trend && (
              <span className={cn(
                "text-xs font-medium",
                gradient 
                  ? "text-white/80" 
                  : trend.isPositive 
                    ? "text-success" 
                    : "text-destructive"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
            {description && (
              <p className={cn(
                "text-xs",
                gradient ? "text-white/70" : "text-muted-foreground"
              )}>
                {description}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}