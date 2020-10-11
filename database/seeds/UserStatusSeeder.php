<?php

use Illuminate\Database\Seeder;

class UserStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('user_status')->delete();
        
        \DB::table('user_status')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'pending',
                'display_name' => 'Pending',
                'created_at' => '2020-06-25 16:23:22',
                'updated_at' => '2020-06-25 16:23:22',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'trial',
                'display_name' => 'Trial',
                'created_at' => '2020-06-25 16:23:22',
                'updated_at' => '2020-06-25 16:23:22',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'activate',
                'display_name' => 'Activate',
                'created_at' => '2020-06-25 16:23:22',
                'updated_at' => '2020-06-25 16:23:22',
            ),
        ));
    }
}
