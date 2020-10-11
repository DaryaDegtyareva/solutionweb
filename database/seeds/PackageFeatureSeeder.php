<?php

use Illuminate\Database\Seeder;

class PackageFeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('packages_features')->delete();
        
        \DB::table('packages_features')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Invoices',
                'slug' => 'invoice',
                'basic' => 0,
                'standared' => 30,
                'premium' => 60,
                'year_basic' => 2,
                'year_standared' => 300,
                'year_premium' => 2,
                'type' => '',
                'text' => '',
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Estimates',
                'slug' => 'estimate',
                'basic' => 5,
                'standared' => 40,
                'premium' => 100,
                'year_basic' => 100,
                'year_standared' => 200,
                'year_premium' => 2,
                'type' => '',
                'text' => '',
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Customers',
                'slug' => 'basic',
                'basic' => 5,
                'standared' => 20,
                'premium' => 50,
                'year_basic' => 20,
                'year_standared' => 70,
                'year_premium' => 2,
                'type' => '',
                'text' => '',
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Business',
                'slug' => 'business',
                'basic' => 3,
                'standared' => 5,
                'premium' => 10,
                'year_basic' => 10,
                'year_standared' => 25,
                'year_premium' => 50,
                'type' => '',
                'text' => '',
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Invoice templates',
                'slug' => 'invoice_template',
                'basic' => 5,
                'standared' => 5,
                'premium' => 5,
                'year_basic' => 5,
                'year_standared' => 5,
                'year_premium' => 5,
                'type' => '',
                'text' => 'Select max value 5',
                'created_at' => '2020-06-29 16:23:22',
                'updated_at' => '2020-06-29 16:23:22',
            ),
        ));
    }
}
