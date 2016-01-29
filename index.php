<?php get_header(); ?>

<main>
  <?php if ( have_posts() ) : ?>
  <?php /* The loop */ ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <h1><?php the_title(); ?></h1>
      <?php the_content(); ?>
    <?php endwhile; ?>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
