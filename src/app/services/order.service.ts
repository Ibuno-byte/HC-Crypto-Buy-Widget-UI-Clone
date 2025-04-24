import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Define the request/response interfaces (or classes)
interface OrderRequest {   
  crypto: string,
  provider: string,
  network: string,
  accountName: string,
  amountReceive: number,
  rate: number,
}

interface OrderResponse {
  orderId: string;
  status: 'pending' | 'completed' | 'failed';
  estimatedCompletion: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  
  createOrder(order: OrderRequest): Observable<OrderResponse> {
    // Mock response
    return of({
      orderId: 'ORDER123456',
      status: 'pending',
      estimatedCompletion: '1-2 minutes',
    });
  }
}