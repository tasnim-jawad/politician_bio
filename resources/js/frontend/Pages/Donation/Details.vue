<template>
  <NavbarArea />
  <!-- Donation Content Section Start here -->
  <div class="donation-content-section margin-top-20">
    <div class="container">
      <!-- breadcrumbs start here -->
      <div class="breadcrumbs style-01">
        <ul>
          <li>
            <Link href="/"><i class="fas fa-home"></i>Home</Link>
          </li>
          <li><Link href="/donation">Donation</Link></li>
          <li>
            <Link href="/donation/details" class="active"
              >Donation Details</Link
            >
          </li>
        </ul>
      </div>
      <!-- breadcrumbs End here -->
      <div class="row">
        <div class="col-lg-8">
          <div class="donation-single-items home-six">
            <div class="bg-wrapper home-six">
              <div
                class="donation-bg"
                :style="{
                  backgroundImage: donation_details?.data?.banner_image
                    ? `url(${
                        donation_details.data.banner_image.match(/^https?:\/\//)
                          ? donation_details.data.banner_image
                          : '/' +
                            donation_details.data.banner_image.replace(
                              /^\/?/,
                              ''
                            )
                      })`
                    : `url('/frontend/assets/img/home-six/donation-sinlge.png')`,
                }"
              >
                <div class="content">
                  <div class="progress-content">
                    <div class="progress-item">
                      <div class="single-progressbar">
                        <div class="html"></div>
                      </div>
                    </div>
                    <div class="goal">
                      <h4 class="raised"><span>Target</span> ${{ donation_details?.data?.target }}</h4>
                      <h4 class="raised"><span>Achived</span> ${{ donation_details?.data?.achived }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {{ donation_details?.data }}
            <div class="content">
              <div class="author-meta">
                <div class="thumb">
                  <img src="/frontend/assets/img/author-01.png" alt="" />
                  <span class="author-name">Luiz Mark</span>
                </div>
                <div class="date">
                  <i class="icon-calander"></i>
                  <span>22 OCT, 2021</span>
                </div>
              </div>
              <h4 class="title">
                Join Us in the Meeting Next Month: Your Voice and Support Matter
              </h4>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in magna ac tellus fringilla eleifend. Mauris et velit risus.
                Phasellus nisi ipsum, fermentum eget consequat non, molestie at
                augue. Proin rutrum sem a rutrum ultricies. Nunc felis neque,
                dictumatin ut porta a, ullamcorper vel ante. Quisque non
                consequat ligula. Pellentesque porttitor eu nisi eu bibendum. In
                non faucibus justo, et viverra lectus. Fusce sodales mauris et
                velit accumsan vulputate.Lorem ipsum dolor sit amerett,
                consectetur adipiscing elit. Vivamus in magna ac tellus
                fringilla eleifend. Mauris et velit risus. Phasellus nisi ipsum,
                fermentum eget consequat non, molestie at augue. Proin rutrum
                semm a rutrum ultrirecies. Nunc felis neque, dictum ut porta a,
                ullamcorper vel ante. Quisque non consequat ligugla.
                Pellentesque porttitor eu nisi eu bibendum. Vivamus in magna ac
                tellus fringilla eleifend. Mauris et velit risus.
              </p>
              <p class="description">
                Fusce sodales mauris et velit accumsan vulputate.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac
                tellus fringilla eleifenrftd. Mauris et velit risus. Phasellus
                nisi ipsum, fermentum eget consequat non, molestie at augue.
                Proin rutrum sem a rutrum ultricies.
              </p>
            </div>
          </div>
          <div class="donation-single-items home-six">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="thumbnail">
                  <img
                    src="assets/img/home-six/donation-single-02.png"
                    class="grid-img"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="thumbnail style-01">
                  <img
                    src="assets/img/home-six/donation-single-03.png"
                    class="grid-img"
                    alt=""
                  />
                  <a
                    class="video-play home-six mfp-iframe"
                    href="https://www.youtube.com/watch?v=-ZwQtICNbRc"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="content">
              <h6 class="subtitle">Challenge</h6>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in magna ac tellus fringilla eleifend. Mauris et velit risus.
                Phasellus nisi ipsum, fermentum eget consequat non, molestie at
                augue. Proin rutrum sem a rutrum ultricies. Nunc felis neque,
                dictum ut porta a, ullamcuorper vel ante. Quisque non consequat
                ligula. Pellentesque porttitor eu nisi eu bibendum. In non
                faucibus justo, et viverra lectus. Fusce sodales mauris et velit
                accumsan vulputate.Loerem ipsum doloor sit amet, consectetur
                adipiscing eliet. Vivamus in magna ac tellus fringilla eleifend.
                Mauris et velit risus. Phasellus nisi ipsum, fermentum eget
                consequat non, molestie at augue. Proin rutrum sem a rurewtrum
                ultricies. Nunc felis neque, dictum ut porta a, ullamcorper vel
                ante. Quisque non consequat ligulana.
              </p>
              <blockquote>
                <p class="style-04">
                  It’s through mistakes that you actually can grow. You have to
                  get bad in order to get good in daily life.
                </p>
                <p class="author-name style-02">- Tanner Garbutt</p>
              </blockquote>
            </div>
          </div>
          <div class="donation-single-items home-six">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="content">
                  <h6 class="subtitle">Summary</h6>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus in magna ac tellus fringilla eleifend. Mauris et
                    velit risus. Phasellus nisi ipsum, ferentum eget consequat
                    non, molestie at augue. Proin rutrum sem a rutrum ultricies.
                    Nunc felis neque, dictum ut porta a, ullamcorper vel ante.
                    Quisque non consequat ligula.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="bg-wrapper style-01">
                  <div
                    class="donation-bg-03"
                    style="
                      background-image: url(/frontend/assets/img/home-six/donation-single-04.png);
                    "
                  ></div>
                </div>
              </div>
            </div>
            <div class="social-area-wrap">
              <div class="btn-wrapper">
                <a href="#" class="boxed-btn counter-btn">Join Now</a>
              </div>
              <ul class="social-area">
                <p>Share The Cause:</p>
                <li>
                  <a href="#0"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#0"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#0"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#0"><i class="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="widget-area">
            <div class="widget widget_search">
              <h2 class="widget-title style-01">Search</h2>
              <form
                action="https://themeim.com/demo/senatory/blog.html"
                class="search-form"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
                <button class="submit-btn" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div class="widget widget_recent_posts">
              <h4 class="widget-title style-02">Upcoming Events</h4>
              <ul class="recent_post_item">
                <li class="single-recent-post-item">
                  <div class="thumb">
                    <img
                      src="/frontend/assets/img/blog-01.png"
                      alt="recent post"
                    />
                  </div>
                  <div class="content">
                    <span class="time">AUG 23,2021</span>
                    <h4 class="title">
                      <a href="#"
                        >Producing ideas is the main way to grow the</a
                      >
                    </h4>
                  </div>
                </li>
                <li class="single-recent-post-item">
                  <div class="thumb">
                    <img
                      src="/frontend/assets/img/blog-02.png"
                      alt="recent post"
                    />
                  </div>
                  <div class="content">
                    <span class="time">AUG 23,2021</span>
                    <h4 class="title">
                      <a href="#">Donald Rumsfeld: Anti–Nation-Builder</a>
                    </h4>
                  </div>
                </li>
                <li class="single-recent-post-item">
                  <div class="thumb">
                    <img
                      src="/frontend/assets/img/blog-03.png"
                      alt="recent post"
                    />
                  </div>
                  <div class="content">
                    <span class="time">AUG 23,2021</span>
                    <h4 class="title">
                      <a href="#"
                        >Negotiating with TTP—A Different Perspective</a
                      >
                    </h4>
                  </div>
                </li>
                <li class="single-recent-post-item">
                  <div class="thumb">
                    <img
                      src="/frontend/assets/img/blog-04.png"
                      alt="recent post"
                    />
                  </div>
                  <div class="content">
                    <span class="time">AUG 23,2021</span>
                    <h4 class="title">
                      <a href="#">Policing in the Post-Floyd Era</a>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
            <div class="widget widget_archive">
              <h3 class="widget-title style-02">category</h3>
              <ul>
                <li>
                  <a href="#">Business Analysis <span>(4)</span></a>
                </li>
                <li>
                  <a href="#">Business Strategy <span>(5)</span></a>
                </li>
                <li>
                  <a href="#">Stock Investment <span>(1)</span></a>
                </li>
                <li>
                  <a href="#">Business Analysis <span>(4)</span></a>
                </li>
                <li>
                  <a href="#">Business Analysis <span>(4)</span></a>
                </li>
                <li>
                  <a href="#">Business Analysis <span>(4)</span></a>
                </li>
              </ul>
            </div>
            <div id="tag_cloud-2" class="widget widget_tag_cloud">
              <h2 class="widget-title style-02">Tags</h2>
              <div class="tagcloud">
                <a href="#">Branding</a>
                <a href="#">Art guide</a>
                <a href="#">Marketing</a>
                <a href="#">Gallery</a>
                <a href="#">Corporate</a>
                <a href="#">Business</a>
              </div>
            </div>
            <div class="widget widget_media_image">
              <h3 class="widget-title style-03">category</h3>
              <ul>
                <li>
                  <img
                    src="/frontend/assets/img/home-six/insta-01.png"
                    alt=""
                  /><i class="fab fa-instagram"></i>
                </li>
                <li>
                  <img
                    src="/frontend/assets/img/home-six/insta-02.png"
                    alt=""
                  /><i class="fab fa-instagram"></i>
                </li>
                <li>
                  <img
                    src="/frontend/assets/img/home-six/insta-03.png"
                    alt=""
                  /><i class="fab fa-instagram"></i>
                </li>
                <li>
                  <img
                    src="/frontend/assets/img/home-six/insta-04.png"
                    alt=""
                  /><i class="fab fa-instagram"></i>
                </li>
                <li>
                  <img
                    src="/frontend/assets/img/home-six/insta-05.png"
                    alt=""
                  /><i class="fab fa-instagram"></i>
                </li>
                <li>
                  <img
                    src="/frontend/assets/img/home-six/insta-06.png"
                    alt=""
                  /><i class="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Donation Content Section Start here -->

  <!-- More Dontion Section Start Here -->
  <div class="more-issue-section style-02">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h4 class="title style-02 wow animate__animated animate__fadeInUp">
              More Donation Programs
            </h4>
            <p
              class="description style-02 wow animate__animated animate__fadeInUp"
            >
              Every pleasures is to welcomed pain avoided owing to the duty the
              obligations of business it will frequently.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="testimonial-carousel-six">
          <div class="issues-single-items home-six">
            <div
              class="issue-img"
              style="background-image: url(/frontend/assets/img/dontion-03.png)"
            >
              <div class="content">
                <h4 class="title">
                  We Need You to Help Us Get the Approval of
                </h4>
                <div class="progress-content">
                  <div class="progress-item">
                    <div class="single-progressbar">
                      <div class="html"></div>
                    </div>
                  </div>
                  <div class="goal">
                    <h4 class="raised">Raised : $90,300</h4>
                    <h4 class="raised">Goal : $40,300</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="issues-single-items home-six">
            <div
              class="issue-img"
              style="background-image: url(/frontend/assets/img/dontion-04.png)"
            >
              <div class="content">
                <h4 class="title">
                  Supporting the Local Activists Fighting Poor
                </h4>
                <div class="progress-content">
                  <div class="progress-item">
                    <div class="single-progressbar">
                      <div class="html"></div>
                    </div>
                  </div>
                  <div class="goal">
                    <h4 class="raised">Raised : $90,300</h4>
                    <h4 class="raised">Goal : $40,300</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- More Donation Section Start Here -->
</template>
<script>
import { mapActions, mapWritableState } from "pinia";
import NavbarArea from "../../CommonComponents/NavbarArea.vue";
import { store as donation_details_store } from "./Store/donation_details_store.js";

export default {
  components: {
    NavbarArea,
  },
  data() {
    return {
      slug: "",
    };
  },
  created: async function () {
    const params = new URLSearchParams(window.location.search);
    this.slug = params.get("slug") || "";
    if (this.slug) {
      await this.fetch_donation_details(this.slug);
    }
  },
  methods: {
    ...mapActions(donation_details_store, ["fetch_donation_details"]),
  },
  computed: {
    ...mapWritableState(donation_details_store, [
      "donation_details",
      "loading",
    ]),
  },
};
</script>
