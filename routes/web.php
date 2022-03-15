<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/api/post', [PostController::class, 'index']);
Route::get('/api/post/create', [PostController::class, 'create']);
Route::post('/api/post', [PostController::class, 'store']);
Route::get('/api/post/{post}', [PostController::class, 'show']);
Route::get('/api/post/{post}/edit', [PostController::class, 'edit']);
Route::put('/api/post/{post}', [PostController::class, 'update']);
Route::delete('/api/post/{post}', [PostController::class, 'destroy']);
