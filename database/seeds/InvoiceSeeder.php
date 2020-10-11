<?php

use Illuminate\Database\Seeder;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('invoices')->delete();
        
        \DB::table('invoices')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 1,
                'business_id' => 1,
                'title' => '',
                'type' => 1,
                'recurring' => 1,
                'parent_id' => 1,
                'summary' => '',
                'number' => '',
                'poso_number' => '',
                'customer' => 1,
                'date' => '2020-06-29',
                'tax' => 1,
                'tax_id' => 1,
                'discount' => 1,
                'payment_due' => '2020-06-29',
                'expire_on' => '2020-07-30',
                'due_limit' => 1,
                'footer_note' => '',
                'sub_total' => 1,
                'grand_total' => 1,
                'convert_total' => 1,
                'status' => 1,
                'is_sent' => 1,
                'is_completed' => 1,
                'sent_date' => '2020-06-29',
                'recurring_start' => '2020-06-29',
                'recurring_end' => '2020-06-29',
                'frequency' => '',
                'next_payment' => '2020-06-29',
                'frequency_count' => 1,
                'auto_send' => '2020-06-29 16:23:22',
                'send_myself' => '2020-06-29',
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
        ));
    }
}
