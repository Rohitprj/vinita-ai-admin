import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  UserPlus,
  Star,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

const customerData = {
  stats: {
    totalCustomers: 4155,
    newCustomers: 145,
    activeCustomers: 3240,
    premiumCustomers: 892,
  },
  geographicData: [
    { city: "Mumbai", customers: 1245, color: "#3b82f6" },
    { city: "Delhi", customers: 987, color: "#10b981" },
    { city: "Bangalore", customers: 765, color: "#f59e0b" },
    { city: "Pune", customers: 623, color: "#ef4444" },
    { city: "Chennai", customers: 535, color: "#8b5cf6" },
  ],
  customerTypeData: [
    { name: "Premium", value: 25, color: "#3b82f6" },
    { name: "Regular", value: 55, color: "#10b981" },
    { name: "New", value: 20, color: "#f59e0b" },
  ],
  topCustomers: [
    {
      id: "C001",
      name: "Rajesh Mehta",
      email: "rajesh.mehta@email.com",
      phone: "+91 98765 43210",
      location: "Mumbai, Maharashtra",
      joinDate: "2023-05-15",
      totalSpent: 125000,
      orders: 24,
      rating: 4.9,
      status: "premium",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "C002", 
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      location: "Delhi, India",
      joinDate: "2023-03-22",
      totalSpent: 98000,
      orders: 18,
      rating: 4.8,
      status: "premium",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "C003",
      name: "Amit Singh",
      email: "amit.singh@email.com", 
      phone: "+91 76543 21098",
      location: "Bangalore, Karnataka",
      joinDate: "2023-07-10",
      totalSpent: 87500,
      orders: 15,
      rating: 4.7,
      status: "regular",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "C004",
      name: "Sneha Patel",
      email: "sneha.patel@email.com",
      phone: "+91 65432 10987",
      location: "Pune, Maharashtra", 
      joinDate: "2023-09-05",
      totalSpent: 76200,
      orders: 12,
      rating: 4.6,
      status: "regular",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "C005",
      name: "Vikram Gupta",
      email: "vikram.gupta@email.com",
      phone: "+91 54321 09876",
      location: "Chennai, Tamil Nadu",
      joinDate: "2023-11-18",
      totalSpent: 65800,
      orders: 9,
      rating: 4.5,
      status: "new",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "premium":
      return "bg-primary text-primary-foreground";
    case "regular":
      return "bg-success text-success-foreground";
    case "new":
      return "bg-warning text-warning-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function Customers() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground mt-2">
          Manage and analyze your customer base
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Customers"
          value={customerData.stats.totalCustomers.toLocaleString()}
          description="registered users"
          icon={Users}
          gradient={true}
        />
        <StatsCard
          title="New Customers"
          value={customerData.stats.newCustomers}
          description="this month"
          icon={UserPlus}
          trend={{ value: 12.3, isPositive: true }}
        />
        <StatsCard
          title="Active Customers"
          value={customerData.stats.activeCustomers.toLocaleString()}
          description="active this month"
          icon={TrendingUp}
        />
        <StatsCard
          title="Premium Customers"
          value={customerData.stats.premiumCustomers}
          description="premium members"
          icon={Star}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Geographic Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={customerData.geographicData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" />
                <YAxis dataKey="city" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="customers" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Customer Types */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Customer Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={customerData.customerTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {customerData.customerTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {customerData.customerTypeData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Customers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Top Customers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerData.topCustomers.map((customer, index) => (
              <div 
                key={customer.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={customer.avatar} alt={customer.name} />
                    <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-foreground">{customer.name}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {customer.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {customer.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      ₹{customer.totalSpent.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {customer.orders} orders
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm font-medium">{customer.rating}</span>
                  </div>

                  <Badge className={getStatusColor(customer.status)}>
                    {customer.status}
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