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
  Package,
  TrendingUp,
  Star,
  Eye,
  ShoppingCart,
  Heart,
  IndianRupee,
} from "lucide-react";

const productsData = {
  stats: {
    totalProducts: 156,
    activeProducts: 142,
    outOfStock: 8,
    lowStock: 14,
    totalRevenue: 2850000,
  },
  categoryData: [
    { category: "Wellness Programs", products: 45, revenue: 1250000 },
    { category: "Consultation Services", products: 32, revenue: 890000 },
    { category: "Digital Courses", products: 28, revenue: 450000 },
    { category: "Health Supplements", products: 24, revenue: 180000 },
    { category: "Wellness Accessories", products: 18, revenue: 80000 },
    { category: "Books & Guides", products: 9, revenue: 45000 },
  ],
  salesTrend: [
    { month: "Jan", sales: 245, revenue: 425000 },
    { month: "Feb", sales: 312, revenue: 515000 },
    { month: "Mar", sales: 287, revenue: 445000 },
    { month: "Apr", sales: 356, revenue: 625000 },
    { month: "May", sales: 423, revenue: 735000 },
    { month: "Jun", sales: 389, revenue: 680000 },
  ],
  topProducts: [
    {
      id: "P001",
      name: "Complete Wellness Transformation Program",
      category: "Wellness Programs",
      price: 15999,
      sales: 187,
      revenue: 2993813,
      rating: 4.9,
      views: 8450,
      stock: 25,
      status: "active",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop",
    },
    {
      id: "P002",
      name: "Stress Management & Mindfulness Course",
      category: "Digital Courses",
      price: 7999,
      sales: 234,
      revenue: 1871766,
      rating: 4.8,
      views: 6720,
      stock: 'unlimited',
      status: "active",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
    },
    {
      id: "P003",
      name: "Personal Life Coaching Session (1-on-1)",
      category: "Consultation Services",
      price: 4999,
      sales: 156,
      revenue: 779844,
      rating: 4.9,
      views: 4890,
      stock: 45,
      status: "active",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    },
    {
      id: "P004",
      name: "Holistic Health Assessment Package",
      category: "Consultation Services",
      price: 3499,
      sales: 198,
      revenue: 692802,
      rating: 4.7,
      views: 5640,
      stock: 12,
      status: "low_stock",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
    },
    {
      id: "P005",
      name: "Ayurvedic Wellness Supplements Set",
      category: "Health Supplements",
      price: 2499,
      sales: 267,
      revenue: 667233,
      rating: 4.6,
      views: 7830,
      stock: 0,
      status: "out_of_stock",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579a8?w=100&h=100&fit=crop",
    },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-success text-success-foreground";
    case "low_stock":
      return "bg-warning text-warning-foreground";
    case "out_of_stock":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "active":
      return "Active";
    case "low_stock":
      return "Low Stock";
    case "out_of_stock":
      return "Out of Stock";
    default:
      return "Unknown";
  }
};

export default function Products() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground mt-2">
          Product catalog and analytics from shunyawellness.com
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <StatsCard
          title="Total Products"
          value={productsData.stats.totalProducts}
          description="in catalog"
          icon={Package}
          gradient={true}
        />
        <StatsCard
          title="Active Products"
          value={productsData.stats.activeProducts}
          description="available now"
          icon={TrendingUp}
        />
        <StatsCard
          title="Out of Stock"
          value={productsData.stats.outOfStock}
          description="need restocking"
          icon={Package}
        />
        <StatsCard
          title="Low Stock"
          value={productsData.stats.lowStock}
          description="running low"
          icon={Package}
        />
        <StatsCard
          title="Total Revenue"
          value={`₹${(productsData.stats.totalRevenue / 100000).toFixed(1)}L`}
          description="from products"
          icon={IndianRupee}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Category Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productsData.categoryData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={120} fontSize={12} />
                <Tooltip formatter={(value, name) => [
                  name === 'revenue' ? `₹${value.toLocaleString()}` : value,
                  name === 'revenue' ? 'Revenue' : 'Products'
                ]} />
                <Bar dataKey="products" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sales Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Sales Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productsData.salesTrend}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'revenue' ? `₹${value.toLocaleString()}` : value,
                  name === 'revenue' ? 'Revenue' : 'Sales'
                ]} />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="Sales"
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Top Performing Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {productsData.topProducts.map((product, index) => (
              <div 
                key={product.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-foreground">{product.name}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>{product.category}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {product.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-warning fill-current" />
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {product.sales} sales
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      ₹{product.revenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">revenue</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      Stock: {typeof product.stock === 'string' ? product.stock : product.stock}
                    </p>
                    <Badge className={getStatusColor(product.status)}>
                      {getStatusText(product.status)}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}