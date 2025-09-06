import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/ui/stats-card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  ShoppingCart,
  TrendingUp,
  Package,
  CheckCircle,
  Clock,
  Truck,
  XCircle,
  IndianRupee,
} from "lucide-react";

const ordersData = {
  stats: {
    totalOrders: 3247,
    pendingOrders: 156,
    processingOrders: 89,
    shippedOrders: 234,
    deliveredOrders: 2598,
    cancelledOrders: 170,
    totalRevenue: 5850000,
  },
  monthlyData: [
    { month: "Jan", orders: 425, revenue: 845000, delivered: 398 },
    { month: "Feb", orders: 512, revenue: 1025000, delivered: 485 },
    { month: "Mar", orders: 467, revenue: 934000, delivered: 445 },
    { month: "Apr", orders: 598, revenue: 1196000, delivered: 567 },
    { month: "May", orders: 687, revenue: 1374000, delivered: 652 },
    { month: "Jun", orders: 558, revenue: 1116000, delivered: 531 },
  ],
  recentOrders: [
    {
      id: "ORD001",
      customerName: "Priya Sharma",
      products: ["Wellness Package Premium", "Stress Relief Guide"],
      amount: 18999,
      status: "delivered",
      date: "2024-01-15",
      paymentMethod: "UPI",
    },
    {
      id: "ORD002",
      customerName: "Rahul Patel",
      products: ["Life Coaching Session", "Mindfulness Course"],
      amount: 12999,
      status: "shipped",
      date: "2024-01-14",
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD003",
      customerName: "Anita Singh",
      products: ["Health Assessment Package"],
      amount: 7499,
      status: "processing",
      date: "2024-01-14",
      paymentMethod: "Net Banking",
    },
    {
      id: "ORD004",
      customerName: "Amit Kumar",
      products: ["Ayurvedic Supplements Set", "Yoga Accessories"],
      amount: 5999,
      status: "pending",
      date: "2024-01-13",
      paymentMethod: "UPI",
    },
    {
      id: "ORD005",
      customerName: "Sneha Joshi",
      products: ["Digital Wellness Course"],
      amount: 3999,
      status: "cancelled",
      date: "2024-01-13",
      paymentMethod: "Credit Card",
    },
  ],
  orderStatusDistribution: [
    { status: "Delivered", count: 2598, percentage: 80 },
    { status: "Shipped", count: 234, percentage: 7.2 },
    { status: "Pending", count: 156, percentage: 4.8 },
    { status: "Processing", count: 89, percentage: 2.7 },
    { status: "Cancelled", count: 170, percentage: 5.3 },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-success text-success-foreground";
    case "shipped":
      return "bg-info text-info-foreground";
    case "processing":
      return "bg-warning text-warning-foreground";
    case "pending":
      return "bg-secondary text-secondary-foreground";
    case "cancelled":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-3 w-3" />;
    case "shipped":
      return <Truck className="h-3 w-3" />;
    case "processing":
      return <Package className="h-3 w-3" />;
    case "pending":
      return <Clock className="h-3 w-3" />;
    case "cancelled":
      return <XCircle className="h-3 w-3" />;
    default:
      return <Clock className="h-3 w-3" />;
  }
};

export default function Orders() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-2">
          Track and manage all customer orders
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Orders"
          value={ordersData.stats.totalOrders.toLocaleString()}
          description="all time"
          icon={ShoppingCart}
          gradient={true}
        />
        <StatsCard
          title="Order Revenue"
          value={`₹${(ordersData.stats.totalRevenue / 100000).toFixed(1)}L`}
          description="total earnings"
          icon={IndianRupee}
          trend={{ value: 18.5, isPositive: true }}
        />
        <StatsCard
          title="Pending Orders"
          value={ordersData.stats.pendingOrders}
          description="need attention"
          icon={Clock}
        />
        <StatsCard
          title="Delivered Orders"
          value={ordersData.stats.deliveredOrders.toLocaleString()}
          description="successfully completed"
          icon={CheckCircle}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Order Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Order Trends (6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ordersData.monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'revenue' ? `₹${value.toLocaleString()}` : value,
                  name === 'revenue' ? 'Revenue' : name === 'orders' ? 'Orders' : 'Delivered'
                ]} />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="orders"
                />
                <Line 
                  type="monotone" 
                  dataKey="delivered" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  name="delivered"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Order Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Order Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ordersData.orderStatusDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Recent Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ordersData.recentOrders.map((order) => (
              <div 
                key={order.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {order.id}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {order.customerName}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {order.products.length > 1 
                        ? `${order.products[0]} + ${order.products.length - 1} more`
                        : order.products[0]
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      ₹{order.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.paymentMethod}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {order.date}
                    </p>
                  </div>
                  
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize">{order.status}</span>
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}