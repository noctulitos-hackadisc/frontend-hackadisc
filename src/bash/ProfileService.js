const userProfile = ({
  name: 'Gerente Main',
  email: 'manager_main@pignus.cl',
  role: { name: 'Gerente' },
  profile: {
    companies: [
      {
        id: 117,
        name: 'Concha y Vásquez Ltda.',
        subcompanies: [
          { id: 119, name: 'Comercial Blanco y Maldonado S.p.A.' },
          { id: 121, name: 'Karen Magdalena Ibarra Muñoz EIRL' },
          { id: 122, name: 'Grupo Fuentes y Asociados Limitada' },
          { id: 124, name: 'Santino Guzmán Toledo E.I.R.L.' },
          { id: 129, name: 'Paulina Espinoza EIRL' },
          { id: 130, name: 'Luis Juan Lagos Poblete EIRL' }
        ]
      }
    ]
  }
});

export { userProfile };
