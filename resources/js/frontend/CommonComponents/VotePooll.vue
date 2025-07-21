<template>
  <div class="poll-wrapper">
    <header>
      <div class="thumb">
        <img src="frontend/assets/img/poll-img.png" alt="" />
      </div>
      <div class="content">
        <h6 class="voter-name">Pier Goodman</h6>
        <span>PARTY SECRETERY</span>
      </div>
      <button class="poll-btn close-btn"><i class="fas fa-times"></i></button>
    </header>
    <div class="poll-area">
      <input type="checkbox" name="poll" id="opt-1" />
      <input type="checkbox" name="poll" id="opt-2" />
      <input type="checkbox" name="poll" id="opt-3" />
      <input type="checkbox" name="poll" id="opt-4" />
      <div class="opt-1 label">
        <div class="content-wrap">
          <div class="content">
            <span class="circle"></span>
            <span class="text">Do you face issue campaign</span>
          </div>
          <span class="percent">15%</span>
        </div>
        <div class="progress" style="--w: 20"></div>
      </div>
      <div class="opt-2 label">
        <div class="content-wrap">
          <div class="content">
            <span class="circle"></span>
            <span class="text">Is candidate perfect for you</span>
          </div>
          <span class="percent">75%</span>
        </div>
        <div class="progress style-01" style="--w: 40"></div>
      </div>
      <div class="opt-3 label">
        <div class="content-wrap">
          <div class="content">
            <span class="circle"></span>
            <span class="text">Is candidate have any claim</span>
          </div>
          <span class="percent">05%</span>
        </div>
        <div class="progress style-02" style="--w: 10"></div>
      </div>
      <div class="opt-4 label">
        <div class="content-wrap">
          <div class="content">
            <span class="circle"></span>
            <span class="text">I have no comments</span>
          </div>
          <span class="percent">35%</span>
        </div>
        <div class="progress style-03" style="--w: 30"></div>
      </div>
    </div>
    <div class="btn-wrapper vote-btn">
      <a href="#" class="boxed-btn btn-sanatory">
        Vote Now
        <i class="fas fa-vote-yea"></i>
      </a>
    </div>
  </div>
  <div class="btn-wrapper poll-btn">
    <span class="boxed-btn btn-poll">
      Vote Now
      <i class="fas fa-vote-yea"></i>
    </span>
  </div>
</template>
<script>
export default {};
</script>
