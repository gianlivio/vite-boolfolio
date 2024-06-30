<script>
import axios from "axios";
export default {
    data() {
        return {
            projects: [],
            page: 1,
            perPage: 8,
            totalProjects: 0
        }
    }, 
    computed: {
        pageCount() {
            return Math.ceil(this.totalProjects / this.perPage);
        },
        paginatedProjects() {
            const start = (this.page - 1) * this.perPage;
            const end = start + this.perPage;
            return this.projects.slice(start, end);
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
            this.projects = resp.data.results;
            this.totalProjects = resp.data.results.length;
        });
    },
    methods: {
        nextPage() {
            if (this.page < this.pageCount) {
                this.page++;
            }
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
            }
        }
    }
}
</script>

<template>
    <div class="app-container">
        <div class="container">
            <h1>Progetti</h1>
            <div class="row row-cols-4 g-3">
                <div class="col" v-for="project in paginatedProjects" :key="project.id">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4>{{ project.name }}</h4>
                            <p>{{ project.description }}</p>
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
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

.app-container {
  background-color: #0d1b2a;
  color: #e0e1dd;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  padding: 20px;
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
  background-color: #ffeb3b;
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
