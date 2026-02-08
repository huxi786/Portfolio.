<?php 
// **PATH FIX:** Corrected the path to the new 'includes' folder.
include 'includes/header.php'; 
?>
  <title>Mystic Mall | Premium Online Store</title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- **PATH FIX:** Corrected the path to the new 'assets' folder. -->
  <link rel="stylesheet" href="assets/css/style.css">
  
  <style>
    /* Retaining original hero banner styles from your file */
    .hero-banner {
      position: relative;
      height: 80vh;
      display: flex;
      align-items: center;
      background-image:url('./images/hero3.jpg');
      background-size:cover;
      color: white;
      overflow: hidden;
      text-align: left 10px;
      /* Added text-align left with 10px padding */
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    .hero-content {
      position: relative;
      z-index: 2;
      padding: 0 5%;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    .hero-content button{
      position: relative;
      left: 8vw;
      bottom:15vh;
      margin: 10px;
      font-size: 1.2rem;
      padding: 10px 20px;
      padding-left: 30px;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-weight: bold;
      font-size: 1.2rem;
      font-family: 'Arial', sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      background-color: #007bff;
    }
    .hero-image {
      position: absolute;
      right: 0;
      bottom: 0;
      top: 50px;
      width: 450px;
      height: 350px;
      object-fit: contain;
      z-index: 1;
      filter: drop-shadow(0 0 20px rgba(0,0,0,0.3));
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0% { transform: translatex(0px); }
      25% { transform: translatex(-50px); }
      50% { transform: translatex(-80px); }
      75% { transform: translatex(100px); }
      100% { transform: translatex(0px); }
    }
  </style>
</head>
<body>
  
  <!-- Hero Banner (Restored from your original file) -->
  <section class="hero-banner">
    <img src="./images/hero" alt="">
    <div class="hero-content">
      <button class="btn btn-outline-success p-3 mx-4" onclick="window.location.href='user/user.php';">Client Dashboard</button>
      <button class="btn btn-outline-secondary p-3" onclick="window.location.href='Admin_login.php';" >Admin Portal</button>
      <img src="./images/hero (2).jpg" alt="Computer Accessories" class="hero-image">
    </div>
  </section>
  
  <!-- Products Section -->
  <?php 
  $sql = "SELECT * FROM products"; 
  // **PATH FIX:** Corrected the path to the new 'includes' folder.
  include 'includes/linking.php'; 
  ?>
  
  <!-- The footer is now inside linking.php, so no need to add it here -->
</body>
</html>
