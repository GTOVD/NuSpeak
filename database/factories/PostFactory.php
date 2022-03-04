<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //Generate random post data from faker
            'title' => $this->faker->sentence(),
            'post' => $this->faker->paragraph(),
            'image' => $this->faker->image('public/images', 400, 300),
        ];
    }
}
