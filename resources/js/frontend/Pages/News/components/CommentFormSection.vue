<template>
  <div class="comment-form-wrap margin-top-15">
    <h3 class="reply-title">{{ replyTitle }}</h3>
    <p>
      {{ replyNote }}
    </p>
    <form
      action="https://themeim.com/demo/senatory/blog-details.html"
      class="comment-form padding-top-25"
    >
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Your Name*" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Your Email*"
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <textarea
              name="message"
              id="message"
              class="form-control textarea"
              placeholder="Write messgae*"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <a href="#" class="boxed-btn btn-sanatory volunteer"
          >Send Now<i class="icon-paper-plan"></i
        ></a>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CommentFormSection",
  props: {
    replyTitle: {
      type: String,
      default: "Leave A Comments",
    },
    replyNote: {
      type: String,
      default:
        "Your email address will not be published. Required fields are marked *",
    },
  },
};
</script>
