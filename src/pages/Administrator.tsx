import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/ui/stats-card";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Activity,
  Clock,
  Users,
  Settings,
} from "lucide-react";

const adminData = {
  profile: {
    name: "Vinita Rashinkar",
    email: "admin@vinitarashinkar.in",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    joinDate: "January 2023",
    role: "Administrator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  stats: {
    totalLogins: 1247,
    lastLogin: "2 hours ago",
    activeUsers: 156,
    systemUptime: "99.9%",
  },
  recentActivities: [
    { action: "Updated user permissions", time: "2 hours ago", type: "security" },
    { action: "Reviewed monthly reports", time: "5 hours ago", type: "management" },
    { action: "Added new product category", time: "1 day ago", type: "product" },
    { action: "System backup completed", time: "2 days ago", type: "system" },
    { action: "Approved customer refunds", time: "3 days ago", type: "finance" },
  ],
  permissions: [
    "User Management",
    "Product Management", 
    "Order Management",
    "Financial Reports",
    "System Settings",
    "Backup & Recovery",
  ],
};

export default function Administrator() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Administrator</h1>
        <p className="text-muted-foreground mt-2">
          Admin profile and system management overview
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Logins"
          value={adminData.stats.totalLogins.toLocaleString()}
          description="all time"
          icon={Activity}
        />
        <StatsCard
          title="Last Login"
          value={adminData.stats.lastLogin}
          description="recent activity"
          icon={Clock}
        />
        <StatsCard
          title="Active Users"
          value={adminData.stats.activeUsers}
          description="online now"
          icon={Users}
          gradient={true}
        />
        <StatsCard
          title="System Uptime"
          value={adminData.stats.systemUptime}
          description="this month"
          icon={Shield}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Admin Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Administrator Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={adminData.profile.avatar} alt={adminData.profile.name} />
                <AvatarFallback className="text-lg">VR</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {adminData.profile.name}
                </h3>
                <Badge variant="secondary" className="mt-1">
                  <Shield className="h-3 w-3 mr-1" />
                  {adminData.profile.role}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{adminData.profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{adminData.profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{adminData.profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined {adminData.profile.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Admin Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {adminData.permissions.map((permission) => (
                <div 
                  key={permission}
                  className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <Shield className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">{permission}</span>
                  <Badge variant="outline" className="ml-auto">
                    Active
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adminData.recentActivities.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className={`h-2 w-2 rounded-full ${
                  activity.type === 'security' ? 'bg-destructive' :
                  activity.type === 'management' ? 'bg-primary' :
                  activity.type === 'product' ? 'bg-success' :
                  activity.type === 'system' ? 'bg-warning' :
                  'bg-info'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    activity.type === 'security' ? 'border-destructive text-destructive' :
                    activity.type === 'management' ? 'border-primary text-primary' :
                    activity.type === 'product' ? 'border-success text-success' :
                    activity.type === 'system' ? 'border-warning text-warning' :
                    'border-info text-info'
                  }`}
                >
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}