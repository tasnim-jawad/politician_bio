<template>
  <NavbarArea />
  <!-- banner section start here -->
  <common-banner
    :background-image="'/frontend/assets/img/about-bg.png'"
    :heading="'Issues Details'"
    :breadcrumbs="[
      { text: 'Home', url: '/' },
      { text: 'Issues', url: '/pages/issues' },
      { text: 'Issues Details', url: '/pages/issues/details' },
    ]"
    key="issues_details"
  />
  <!-- banner section End here -->

  <!-- Issues Details Section Start Here -->
  <div class="issues-details-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="bg-wrapper">
            <div
              class="issue-details-bg"
              style="background-image: url(/frontend/assets/img/judges-bg.png)"
            ></div>
          </div>
          <div class="content">
            <h4 class="title">Criminal Justice</h4>
            <h6 class="subtitle">Description</h6>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in magna ac tellus fringilla eleifend. Mauris et velit risus.
              Phasellus nisi ipsum, fermentum eget consequat non, molestie at
              augue. Proin rutrum sem a rutrum ultricies. Nunc felis neque,
              dictum ut porta a, ullamcorper vel ante. Quisque non consequat
              ligula. Pellentesque porttitor eu nisi eu bibendum. In non
              faucibus justo, et viverra lectus. Fusce sodales mauris et velit
              accumsan vulputate.
            </p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in magna ac tellus fringilla eleifend. Mauris et velit risus.
              Phasellus nisi ipsum, fermentum eget consequat non, molestie at
              augue. Proin rutrum sem a rutrum ultricies.
            </p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in magna ac tellus fringilla eleifend. Mauris et velit risus.
              Phasellus nisi ipsum, fermentum eget consequat non, molestie at
              augue. Proin rutrum sem a rutrum ultricies. Nunc felis neque,
              dictum ut porta a, ullamcorper vel ante. Quisque non consequat
              ligula. Pellentesque porttitor eu nisi eu bibendum. In non
              faucibus justo, et viverra lectus. Fusce sodales mauris et velit
              accumsan vulputate.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.
              Mauris et velit risus. Phasellus nisi ipsum, fermentum eget
              consequat non, molestie at augue..
            </p>
          </div>
          <numbered-list :subtitle="actionSubtitle" :items="actionItems" />
        </div>
      </div>
    </div>
  </div>
  <!-- Issues Details Section End Here -->
</template>

<script>
import NavbarArea from "../../../CommonComponents/NavbarArea.vue";
import CommonBanner from "../../../CommonComponents/CommonBanner.vue";
import NumberedList from "../../../GlobalComponent/NumberedList.vue";
export default {
  components: {
    NavbarArea,
    CommonBanner,
    NumberedList,
  },
  data() {
    return {
      actionSubtitle: "Taking action on this issue",
      actionItems: [
        {
          title: "The Politics of Selecting Decision Makers",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend. Mauris et velit risus. Phasellus nisi ipsum, fermentum eget consequat non, molestie at augue.",
        },
        {
          title: "The Politics of Law Making",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend. Mauris et velit risus. Phasellus nisi ipsum, fermentum eget consequat non, molestie at augue.",
        },
        {
          title: "The Politics of Policing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend. Mauris et velit risus. Phasellus nisi ipsum, fermentum eget consequat non, molestie at augue.",
        },
        {
          title: "The Politics of Prosecution",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend. Mauris et velit risus. Phasellus nisi ipsum, fermentum eget consequat non, molestie at augue.",
        },
      ],
    };
  },
};
</script>
