import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getDashboardStats() {
    // TODO: aggregate bookings/revenue/providers stats across categories
    return { totalBookings: 0, totalRevenue: 0, totalProviders: 0 };
  }
}
