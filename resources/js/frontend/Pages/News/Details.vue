<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'News Details'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'News', url: '/pages/news' },
      { text: 'News Details', url: '/pages/news/details' },
    ]"
    key="news_details"
  />
  <!-- banner section End here -->

  <!-- blog items Section Start Here -->
  <div class="issues-around-us-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="blog-details-items">
            <div class="thumb">
              <img src="/frontend/assets/img/blog-single-bg.png" alt="blog" />
            </div>
            <div class="blog-details-item-header">
              <h6>MARKETING</h6>
            </div>
            <h2 class="title">
              Many important brands have given us their trust
            </h2>
            <p>
              A federation also known as a federal state is a political entity
              characterized by a union of partially self-governing provinces,
              states, or other regions under a central federal government
              federalism. In a fation, the self-governing status of the
              component states, as well as the division of power between them
              and central government, is typi constitutionally entrenched and
              may not be altered by a unilateral decision
            </p>
            <div class="blog-list-items">
              <ul>
                <li>Free Download Instagram Logo</li>
                <li>
                  Illustrator from Instagram Logo 9 Vectors svg vector
                  collection
                </li>
                <li>
                  Vectors SVG vector illustration graphic art design format.
                </li>
                <li>
                  Following vectors are from the same pack as this vector also
                </li>
                <li>Instagram Logo SVG Vector is a part of Social Websites</li>
              </ul>
            </div>
            <p>
              A federation also known as a federal state is a political entity
              characterized by a union of partially self-governing provinces,
              states, or other regions under a central federal government
              federalism. In a fation, the self-governing status of the
              component states, as well as the division
            </p>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="thumb">
                  <img src="/frontend/assets/img/blog-single-02.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="thumb">
                  <img src="/frontend/assets/img/blog-single-01.png" alt="" />
                </div>
              </div>
            </div>
            <blockquote>
              <p>
                It’s through mistakes that you actually can grow. You have to
                get bad in order to get.
              </p>
              <p class="author-name style-01">- Tanner Garbutt</p>
            </blockquote>
            <p>
              A federation also known as a federal state is a political entity
              characterized by a union of partially self-governing provinces,
              states, or other regions under a central federal government
              federalism. In a fation, the self-governing status of the
              component states, as well as the division of power between them
              and central government, is typi constitutionally entrenched and
              may not be altered by a unilateral decision
            </p>
          </div>
          <div class="blog-details-footer">
            <ul class="tags">
              <li class="title">Tags:</li>
              <li>
                <a href="#" rel="tag">Gallery</a>
                <a href="https://themeim.com/" rel="tag">Theme</a>
              </li>
            </ul>
          </div>
          <div class="blog-single-pagination">
            <ul>
              <li>
                <a class="next page-numbers" href="#"
                  ><i class="fas fa-arrow-left"></i>Previous Post</a
                >
              </li>
              <li>
                <a href="#">
                  <img src="/frontend/assets/icon/Repeat-Grid.svg" alt="" />
                </a>
              </li>
              <li>
                <a class="next page-numbers" href="#"
                  >Next Post<i class="fas fa-arrow-right"></i
                ></a>
              </li>
            </ul>
          </div>

          <!-- Top Ratec Section Start Here -->
          <!-- Top Ratec Section Start Here -->
          <NewsSlider :title="'Top Related Post'" />
          <!-- Top Rated Section End Here -->
          <!-- Top Rated Section End Here -->

          <!-- Comment Form Section Start Here -->
          <!-- Comment Form Section Start Here -->
          <comment-form-section />
          <!-- Comment Form Section End Here -->
          <!-- Comment Form Section End Here -->

        </div>
        <div class="col-lg-4">
          <div class="widget-area">
            <!-- Search section -->
            <SearchSection />
            <!-- Search section -->
            <!-- Recent posts section -->
            <RecentPostSection />
            <!-- Recent posts section -->
            
            <!-- Category section -->
            <CategorySection />
            <!-- Category section -->
            <!-- Tags section -->
            <TagsSection />
            <!-- Tags section -->

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- blog Items Section Start Here -->
</template>
<script>
import { Link } from "@inertiajs/vue3";
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../CommonComponents/CommonBanner.vue";
import CategorySection from "./components/CategorySection.vue";
import TagsSection from "./components/TagsSection.vue";
import SearchSection from "./components/SearchSection.vue";
import RecentPostSection from "./components/RecentPostSection.vue";
import NewsSlider from "../../GlobalComponent/NewsSlider.vue";
import CommentFormSection from './components/CommentFormSection.vue';


export default {
  components: {
    NavbarArea,
    CommonBanner,
    CategorySection,
    TagsSection,
    SearchSection,
    RecentPostSection,
    NewsSlider,
    CommentFormSection,
  },
  data() {
    return {
      topRatedNews: [
        {
          bg: "/frontend/assets/img/businessmen-shaking-hands.png",
          title: "Many important brands have given us their trust",
          author: "Smith Roy",
          date: "24th March,2021",
        },
        {
          bg: "/frontend/assets/img/partners-shaking-hands.png",
          title: "Many important brands have given us their trust",
          author: "Smith Roy",
          date: "24th March,2021",
        }
      ],
    };
  },
};
</script>
