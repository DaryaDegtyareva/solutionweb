<?php

use Illuminate\Database\Seeder;

class InvoiceItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('invoices_items')->delete();
        
        \DB::table('invoices_items')->insert(array (
            0 => 
            array (
                'id' => 1,
                'invoice_id' => 1,
                'item' => 1,
                'qty' => 0,
                'price' => 00.00,
                'total' => 00.00,
                'type' => 2,
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
        ));
    }
}
