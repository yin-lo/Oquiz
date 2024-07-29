function isAdmin(req, res, next) {
  // Notre utilisateur n'est pas un admin
  if (req.user?.role !== 'admin') {
    // Si l'utilisateur connecté n'est pas un admin, on le redirige vers la page d'accueil
    res.redirect('/');
  } else {
    // Sinon, l'utilisateur est connecté, je le laisse passer
    next();
  }
}

module.exports = isAdmin;
