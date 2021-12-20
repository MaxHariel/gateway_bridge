export class CreateOrderDto {
  id?: string;
  amount: number;
  credit_card_name: string;
  credit_card_number: number;
  credit_card_expiration_month: number;
  account_id: string;
  credit_card_expiration_year: number;
  credit_card_cvv: number;
}
