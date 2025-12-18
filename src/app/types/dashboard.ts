export interface DashboardStats {
  label: string;
  value: string | number;
  change: number;
  isPositive: boolean;
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  type: 'digital' | 'course' | 'subscription';
  price: number;
  sales: number;
  revenue: number;
  status: 'active' | 'draft' | 'archived';
  image?: string;
}

export interface Order {
  id: string;
  customerName: string;
  product: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  date: string;
  email?: string;
}

export interface RevenueData {
  label: string;
  value: number;
}

export interface TopProduct {
  id: string;
  name: string;
  sales: number;
  revenue: number;
}

export interface DashboardData {
  stats: DashboardStats[];
  recentOrders: Order[];
  topProducts: TopProduct[];
  revenueChart: RevenueData[];
  totalCreators?: number;
  activeSubscriptions?: number;
}
