<script>
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      emailData: { emailValue: "", isValid: false, isTrySend: false },
    };
  },

  methods: {
    submit() {
      this.emailData.isTrySend = true;
      //check if email is valid
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.emailData.emailValue
        )
      ) {
        this.emailData.isValid = true;
        console.log("Valid email address!");
      } else {
        this.emailData.isValid = false;
      }
    },
  },
  components: { Footer },
};
</script>

<template>
  <header class="pt-[32px] md:hidden">
    <div class="px-[31px]">
      <img src="./assets/logo.svg" alt="logo" class="w-[100px]" />
    </div>
  </header>
  <main class="pt-[32px] md:flex md:flex-row-reverse md:pt-0 bg-gradientFirst">
    <section class="md:w-[41.7%]">
      <img
        class="w-full md:hidden"
        src="./assets/hero-mobile.jpg"
        alt="hero image"
      />
      <img
        class="w-full h-full object-cover hidden md:block"
        src="./assets/hero-desktop.jpg"
        alt="hero image"
      />
    </section>

    <section class="mx-auto py-[66px] md:w-1/2 md:py-[29px] w-[82.5%]">
      <div class="mx-auto md:ps-[7%] md:pe-[11%] lg:ps-[15%] lg:pe-[23%]">
        <header class="pt-[32px] hidden md:block md:pt-[34px]">
          <div>
            <img
              src="./assets/logo.svg"
              alt="logo"
              class="w-[100px] md:w-[154px]"
            />
          </div>
        </header>
        <h1
          class="text-center leading-[41px] text-[37px] tracking-[12px] md:text-start md:mt-[140px] md:text-[65px] md:tracking-[16px] md:leading-[66px]"
        >
          <span class="font-light text-desaturedRed uppercase">we're</span
          ><br /><span class="uppercase font-semibold">coming<br />soon</span>
        </h1>
        <p
          class="text-center mt-5 text-[14px] px-[1px] text-desaturedRed md:text-start md:mt-[24px] md:text-[16px] md:leading-7"
        >
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div
          class="mt-[34px] w-full py-[12px] rounded-full border-desaturedRed border relative flex has-[:focus]:border-[red] has-[:focus]:border md:mt-[41px]"
          :class="{
            'border-[red] border': emailData.isTrySend && !emailData.isValid,
          }"
        >
          <input
            type="email"
            v-model="emailData.emailValue"
            @keydown.enter="submit"
            placeholder="Email Address"
            class="text-[14px] placeholder:text-desaturedRed grow ms-[25px] focus:outline-none bg-transparent"
          />
          <div class="basis-[63px] relative md:basis-[102px]">
            <div
              class="absolute top-0 -left-1/2"
              v-show="emailData.isTrySend && !emailData.isValid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="12" cy="12" r="12" fill="#F96464" />
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <button
            @click.prevent="submit"
            class="bg-gradientSecond absolute right-[-2px] top-[-1px] bottom-[-1px] w-[63px] rounded-[20px/50%] flex items-center justify-center hover:scale-110 shadow-[0_7px_11px_2px_#00000040] transition md:w-[102px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="2"
                d="M1 1l8.836 8.836L1 18.671"
              />
            </svg>
          </button>
        </div>
        <div
          class="text-[red] ms-[25px] text-[12px] mt-[5px]"
          v-show="emailData.isTrySend && !emailData.isValid"
        >
          Please provide a valid email.
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
