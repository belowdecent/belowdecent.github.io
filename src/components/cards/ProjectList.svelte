<script lang="ts">
import ProjectCardList from "./ProjectCardList.svelte";
import ProjectCard from "./ProjectCard.svelte";
</script>

<ProjectCardList title="Web">
  <ProjectCardList title="Smaller web">
    <ProjectCard title="Pet Rock app" linkTo="based.com">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea quae? 
      Quis vitae illo magnam unde maxime asperiores ab tempora vero perferendis, 
      culpa explicabo quibusdam a quisquam nobis rem possimus.
    </ProjectCard>
    <ProjectCard title="Pet Rock app 2" linkTo="cringe.com">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea quae? 
      Quis vitae illo magnam unde maxime asperiores ab tempora vero perferendis, 
      culpa explicabo quibusdam a quisquam nobis rem possimus.
    </ProjectCard>
  </ProjectCardList>
  <ProjectCard title="Pet Rock app" linkTo="based.com">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea quae? 
    Quis vitae illo magnam unde maxime asperiores ab tempora vero perferendis, 
    culpa explicabo quibusdam a quisquam nobis rem possimus.
  </ProjectCard>
  <ProjectCard title="Pet Rock app 2" linkTo="cringe.com">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea quae? 
    Quis vitae illo magnam unde maxime asperiores ab tempora vero perferendis, 
    culpa explicabo quibusdam a quisquam nobis rem possimus.
  </ProjectCard>
</ProjectCardList>
