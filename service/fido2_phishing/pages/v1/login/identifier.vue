<template>

  <div class="container-fluid">
    <div id="nv-signin" class="col-12" data-bs-toggle="modal" data-bs-target="#qrSigninModal">
      <img src="/images/shopify_signin.png" class="img-fluid" alt="ndivia sign in"/>
    </div>

    <div class="modal" id="qrSigninModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body" data-bs-dismiss="modal">
            <div style="width:400px;">
              <img :src="`/images/nvidia_signin_with_qr.png?${cur_time}`"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const cur_time = Date.now();
</script>
