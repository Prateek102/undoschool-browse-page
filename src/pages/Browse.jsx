import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import FilterChips from "../components/FilterChips";
import CourseRow from "../components/CourseRow";
import WebinarSection from "../components/WebinarSection";
import TeacherCard from "../components/TeacherCard";
import CategoryCard from "../components/CategoryCard";
import TimeFilterCard from "../components/TimeFilterCard";
import TimeChips from "../components/TimeChips";
import Footer from "../components/Footer";

import { courses, webinarCourses, timeFilterCourses } from "../data/courses";
import { teachers } from "../data/teachers";
import { categories } from "../data/categories";

export default function Browse() {
  return (
    <div className="min-h-screen bg-gray-50/80">

      <Navbar />

      {/* Home / Hero */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <FilterChips />

      {/* Courses Section */}
      <section id="courses" className="scroll-mt-24">
        <CourseRow
          title="New Launches"
          subtitle="Our most loved courses that kids absolutely adore!"
          courses={courses}
        />

        <CourseRow
          title="Featured Courses"
          subtitle="Our most loved courses that kids absolutely adore!"
          courses={courses.slice(0, 5)}
        />
      </section>

      {/* Teachers Section */}
      <section className="py-8 sm:py-10 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            title="Learn from Top Teachers"
            subtitle="Expert instructors who make learning fun and engaging for every child"
          />

          <div className="mt-10 flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

        </div>
      </section>

      {/* Webinar Section */}
      <WebinarSection courses={webinarCourses} />

      {/* Categories Section */}
      <section className="py-8 sm:py-10 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            title="Popular Categories"
            subtitle="Pick what you love most! These categories have everything you need to learn something awesome"
          />

          <div className="mt-8 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

        </div>
      </section>

      {/* Time Filter Section */}
      <section className="py-8 sm:py-10 lg:py-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            title="Filter with Time"
            subtitle="Choose the perfect time that fits your child's schedule."
          />

          <TimeChips />

          <div className="mt-8 flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
            {timeFilterCourses.map((course) => (
              <TimeFilterCard key={course.id} course={course} />
            ))}
          </div>

        </div>
      </section>

      {/* Footer / About */}
      <footer id="about" className="scroll-mt-24">
        <Footer />
      </footer>

    </div>
  );
}