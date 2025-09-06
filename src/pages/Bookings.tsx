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
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  Users,
  AlertCircle,
} from "lucide-react";

const bookingData = {
  stats: {
    totalBookings: 2847,
    confirmedBookings: 2456,
    pendingBookings: 234,
    cancelledBookings: 157,
    todayBookings: 24,
  },
  monthlyData: [
    { month: "Jan", bookings: 245, completed: 230 },
    { month: "Feb", bookings: 312, completed: 298 },
    { month: "Mar", bookings: 287, completed: 275 },
    { month: "Apr", bookings: 356, completed: 340 },
    { month: "May", bookings: 423, completed: 405 },
    { month: "Jun", bookings: 398, completed: 378 },
  ],
  recentBookings: [
    {
      id: "BK001",
      clientName: "Priya Sharma",
      service: "Life Coaching Session",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "confirmed",
      duration: "60 mins",
    },
    {
      id: "BK002",
      clientName: "Rahul Patel",
      service: "Stress Management Consultation",
      date: "2024-01-15",
      time: "2:00 PM",
      status: "pending",
      duration: "45 mins",
    },
    {
      id: "BK003",
      clientName: "Anita Singh",
      service: "Mindfulness Workshop",
      date: "2024-01-16",
      time: "11:00 AM",
      status: "confirmed",
      duration: "90 mins",
    },
    {
      id: "BK004",
      clientName: "Amit Kumar",
      service: "Wellness Consultation",
      date: "2024-01-16",
      time: "4:00 PM",
      status: "cancelled",
      duration: "30 mins",
    },
    {
      id: "BK005",
      clientName: "Sneha Joshi",
      service: "Personal Development Session",
      date: "2024-01-17",
      time: "9:00 AM",
      status: "confirmed",
      duration: "75 mins",
    },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-success text-success-foreground";
    case "pending":
      return "bg-warning text-warning-foreground";
    case "cancelled":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "confirmed":
      return <CheckCircle className="h-3 w-3" />;
    case "pending":
      return <Clock className="h-3 w-3" />;
    case "cancelled":
      return <XCircle className="h-3 w-3" />;
    default:
      return <AlertCircle className="h-3 w-3" />;
  }
};

export default function Bookings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
        <p className="text-muted-foreground mt-2">
          Track and manage all bookings from meet.vinitarashinkar.in
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <StatsCard
          title="Total Bookings"
          value={bookingData.stats.totalBookings.toLocaleString()}
          description="all time"
          icon={Calendar}
          gradient={true}
        />
        <StatsCard
          title="Confirmed"
          value={bookingData.stats.confirmedBookings.toLocaleString()}
          description="completed bookings"
          icon={CheckCircle}
        />
        <StatsCard
          title="Pending"
          value={bookingData.stats.pendingBookings}
          description="awaiting confirmation"
          icon={Clock}
        />
        <StatsCard
          title="Cancelled"
          value={bookingData.stats.cancelledBookings}
          description="total cancellations"
          icon={XCircle}
        />
        <StatsCard
          title="Today"
          value={bookingData.stats.todayBookings}
          description="scheduled today"
          icon={Users}
        />
      </div>

      {/* Booking Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Booking Trends (6 Months)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bookingData.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="bookings" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Total Bookings"
              />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Completed"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Recent Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookingData.recentBookings.map((booking) => (
              <div 
                key={booking.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {booking.id}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {booking.clientName}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {booking.service}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {booking.date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {booking.time} • {booking.duration}
                    </p>
                  </div>
                  
                  <Badge className={getStatusColor(booking.status)}>
                    {getStatusIcon(booking.status)}
                    <span className="ml-1 capitalize">{booking.status}</span>
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