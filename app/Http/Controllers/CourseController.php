<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'courses' => Course::where('is_published', true)->with('lessons')->get(),
        ]);
    }

    public function show(Course $course)
    {
        $course->load(['lessons' => function ($query) {
            $query->orderBy('sort_order', 'asc');
        }]);

        return Inertia::render('Course/Show', [
            'course' => $course,
        ]);
    }
}