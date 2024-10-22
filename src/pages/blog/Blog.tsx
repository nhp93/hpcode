import BreadCrumb from "@/common/BreadCrumb";
import Banner from "@/components/Banner/Banner";
import ListBlog from "@/components/Blog/ListBlog";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-secondary-200 w-full">
      <Banner name="Bài viết" imgUrl="https://www.kymviet.com.vn/1-4.jpg" />
      <ListBlog />
    </div>
  );
};

export default Blog;
