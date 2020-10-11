<?php

use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('packages')->delete();
        
        \DB::table('packages')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Starter',
                'slug' => 'basic',
                'price' => 20.00,
                'monthly_price' => 0.00,
                'bill_type' => 'year',
                'dis_month' => 6,
                'dis_year' => 50,
                'is_special' => 0,
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Standard',
                'slug' => 'standared',
                'price' => 35.00,
                'monthly_price' => 15.00,
                'bill_type' => 'year',
                'dis_month' => 10,
                'dis_year' => 20,
                'is_special' => 1,
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Premium',
                'slug' => 'premium',
                'price' => 1000.00,
                'monthly_price' => 30.00,
                'bill_type' => 'year',
                'dis_month' => 20,
                'dis_year' => 40,
                'is_special' => 0,
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
        ));
    }
}
