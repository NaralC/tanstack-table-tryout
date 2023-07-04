import { Payment } from "@/app/payment/columns";

export default async function getData(): Promise<Payment[]> {
    return new Promise<Payment[]>((resolve) => {
      setTimeout(() => {
        const data: Payment[] = [
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "368nz33h",
            amount: 66,
            status: "pending",
            email: "a@example.com",
          },
          {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "example@gmail.com",
          },
          // ...
        ];
  
        resolve(data);
      }, 2000); // Delay of 2 seconds (2000 milliseconds)
    });
  }