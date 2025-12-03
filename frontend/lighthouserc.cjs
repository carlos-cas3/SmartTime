module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:8080/dashboard',
        'http://localhost:8080/calendario',
        'http://localhost:8080/actividades/examenes',
        'http://localhost:8080/actividades/extras',
        'http://localhost:8080/actividades/proyectos',
        'http://localhost:8080/actividades/tareas',
        'http://localhost:8080/profile',
        'http://localhost:8080/settings',
        'http://localhost:8080/notificaciones',
        'http://localhost:8080/cargaSemanal',
        'http://localhost:8080/reportes',
        'http://localhost:8080/editProfile',
        'http://localhost:8080/login',
        'http://localhost:8080/register'
      ]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
