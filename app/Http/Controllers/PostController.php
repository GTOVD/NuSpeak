<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Log;
use Exception;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \App\Models\Post $post
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Post::all();
        return response()->json($post->all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return redirect('/')->with('create', 'created work!');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        dd($request);
        $request->validate([
            'title' => 'required|max:255',
            'post' => 'nullable|max:10000',
            'image' => 'nullable',
        ]);
        $post = new Post([
            'title' => $request->get('title'),
            'post' => $request->get('post'),
            'image' => $request->get('image'),
        ]);
        $post->save();

        return response()->json($post);
        //return redirect('/')->with('success', 'post saved!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
        //return redirect('/')->with('show', 'show work!');
        return response()->json($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
        $request->validate([
            'title' => 'required|max:255',
            'post' => 'nullable|max:10000',
            'image' => 'nullable',
        ]);

        $post = Post::find($post);
        $post->title =  $request->get('title');
        $post->post = $request->get('post');
        $post->image = $request->get('image');
        $post->save();
        return response()->json($post);
        //return redirect('/')->with('success', 'Contact updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
        $post = Post::find($post);
        $post->delete();
        return redirect('/')->with('success', 'Contact deleted!');
    }
}
