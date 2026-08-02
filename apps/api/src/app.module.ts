import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProvidersModule } from './modules/providers/providers.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { AvailabilityModule } from './modules/availability/availability.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { SearchModule } from './modules/search/search.module';
import { MediaModule } from './modules/media/media.module';
import { AdminModule } from './modules/admin/admin.module';

import { HotelsModule } from './modules/categories/hotels/hotels.module';
import { SalonsModule } from './modules/categories/salons/salons.module';
import { RentalsModule } from './modules/categories/rentals/rentals.module';
import { FlightsModule } from './modules/categories/flights/flights.module';
import { TrainsModule } from './modules/categories/trains/trains.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),

    // Core domain
    AuthModule,
    UsersModule,
    ProvidersModule,
    BookingsModule,
    AvailabilityModule,
    PaymentsModule,
    ReviewsModule,
    NotificationsModule,
    SearchModule,
    MediaModule,
    AdminModule,

    // Booking categories
    HotelsModule,
    SalonsModule,
    RentalsModule,
    FlightsModule,
    TrainsModule,
  ],
})
export class AppModule {}
