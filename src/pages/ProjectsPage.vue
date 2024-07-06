<script>
import axios from "axios";


export default {
  data() {
    return {
      projects: [],
      page: 1,
      perPage: 8,
      totalProjects: 0,
      loading: true,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalProjects / this.perPage);
    },
    paginatedProjects() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.projects.slice(start, end);
    },
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      this.loading = true;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/projects');
        this.projects = response.data.results;
        this.totalProjects = response.data.results.length;
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    truncateText(text, length) {
      if (text.length <= length) {
        return text;
      }
      return text.substring(0, length) + '...';
    },
  },
};
</script>

<template>
  <div class="app-container">
    <div class="background-image">
      <div class="content">
        <div class="container">
          <h1>Projects</h1>
          <div v-if="loading">Loading...</div>
            <div v-else>
              <div class="row row-cols-4 g-3">
                <div class="col" v-for="project in paginatedProjects" :key="project.id">
                  <div class="card h-100">
                    <div class="card-body">
                      <h4>{{ truncateText(project.name, 20) }}</h4>
                      <p>{{ truncateText(project.description, 100) }}</p>
                      <small><strong>Slug:</strong> {{ project.slug }}</small><br>
                      <small><strong>Created At:</strong> {{ new Date(project.created_at).toLocaleDateString() }}</small><br>
                      <small><strong>Type ID:</strong> {{ project.type_id }}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination">
                <button @click="prevPage" :disabled="page === 1">Prev</button>
                <span>Page {{ page }} of {{ pageCount }}</span>
                <button @click="nextPage" :disabled="page === pageCount">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

.background-image {
  background: url('/sfondo.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay background */
  color: #e0e1dd;
}

.container {
  h1 {
    color: #ffcc00;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
  }
}

.row-cols-4 > * {
  padding: 15px;
}

.card {
  background-color: rgba(255, 235, 59, 0.6); /* Increased transparency */
  border: 1px solid #000;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .card-body {
    h4 {
      margin-bottom: 10px;
      color: #000;
      font-family: 'Montserrat', sans-serif;
    }
    p {
      font-size: 0.9em;
      color: #333;
    }
    small {
      display: block;
      margin-bottom: 5px;
      color: #555;
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #000;
    color: #ffcc00;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #333;
      color: #ffeb3b;
    }

    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0 10px;
    font-size: 1.2em;
    color: #e0e1dd;
  }
}
</style>