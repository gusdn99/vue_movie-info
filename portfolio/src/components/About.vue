<template>
  <section id="about" class="container"> <!-- container: 반응형 고정 너비 컨테이너 -->
    <h1>About</h1>
    <!--
      row: 그리드 행을 생성
      gx-5: 열 사이의 가로 간격을 설정 (x축 거터)
    -->
    <div class="row gx-5">
      <figure class="col-md-6"> <!-- col-md-6: 중간 크기 화면에서 6칸(전체 12칸 중 절반) 차지 -->
        <img src="../assets/images/profile.jpg" alt="" />
        <figcaption>About David Kim</figcaption>
      </figure>
      <p class="col-md-6"> <!-- col-md-6: 중간 크기 화면에서 6칸(전체 12칸 중 절반) 차지 -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        nobis beatae nesciunt amet explicabo tempore error sed molestias quas id
        cumque tenetur, numquam enim eligendi aperiam maiores nisi saepe culpa!
      </p>
    </div>

    <article class="row py-5"> <!-- py-5: 위아래 패딩을 크게 설정 -->
      <h2>Skills</h2>
      <dl>
        <template v-for="item in skills">
          <dt class="lead">{{ item.name }}</dt> <!-- lead: 강조된 단락 텍스트 -->
          <dd>
            <div class="progress" role="progressbar"> <!-- progress: 진행 상태 표시 컨테이너 -->
              <!--
                progress-bar: 실제 진행 상태를 나타내는 바
                text-end: 텍스트 오른쪽 정렬
                pe-3: 오른쪽 패딩 추가
              -->
              <div class="progress-bar text-end pe-3" :style="{ width: item.point }">
                {{ item.point }}
              </div>
            </div> 
          </dd> 
        </template>
      </dl>
    </article>
  </section>
</template>

<script setup>
  const skills = [
    { name: "HTML", point: "90%" },
    { name: "CSS", point: "80%" },
    { name: "JAVASCRIPT", point: "50%" },
    { name: "VUE", point: "75%" },
  ];
</script>

<style lang="scss"> /* scss를 사용하려면 npm install -D sass 입력해서 의존성 추가해야 함 */
  figure img {
    width: 100%;
  }
</style>
