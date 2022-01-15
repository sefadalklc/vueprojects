<template>
  <div class="makale-ekle">
<form >
    <label>Makale Başlık :</label>
    <input type="text" id="baslik" name="baslik" required/>
    <label>Makale İçerik : </label>
    <input type="text" id="icerik" name="icerik" required/>
    <button>Oluştur</button>
</form>
  </div>
</template>

<script>
export default {
    name:'MakaleEkler'

}
</script>

<style>
.makale-ekle form {
    max-width: 400px;
    margin: 0 auto;
}
.makale-ekle input,
.makale-ekle textarea{
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
}
.makale-ekle label{
    display: block;
    margin-top: 24px;
}
textarea {
    height: 120px;
}
.makale-ekle button{
    margin-top: 20px;
    background: orangered;
    color: white;
    padding: 6px;
    border-radius: 10px;
    font-size: 1.2em;
    cursor: pointer;
}
</style>