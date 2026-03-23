# bank-dashboard
Tableau de bord bancaire fictif permettant à un conseiller de consulter les comptes et l'historique de transactions de ses clients.

Front-end Angular fonctionnant avec [bank-api](https://github.com/donovan-cartier/bank-api), back-end Spring Boot qui expose les données via une API REST. En production, les deux projets ont pour objectif de fonctionner ensemble. La démo utilise des données mockées pour fonctionner sans serveur.

**Démo** : [donovan-cartier.github.io/bank-dashboard](https://donovan-cartier.github.io/bank-dashboard/)

---

## Fonctionnalités

- Liste des clients avec recherche
- Consultation des comptes (courant / épargne) par client
- Historique des transactions avec montants (crédit / débit)
- Données fictives mockées

---

## Stack

- **Angular 21** — standalone components, signals, effects
- **TypeScript**
- **Spartan UI / shadcn** — composants UI
- **Tailwind CSS**
- **RxJS** — gestion des Observables et recherche avec `BehaviorSubject`

---

## Architecture

```
src/app/
├── components/
│   ├── client-list/       # Sidebar/Drawer — liste et recherche des clients
│   ├── account-list/      # Cards des comptes d'un client
│   ├── transaction-list/  # Tableau des transactions d'un compte
│   ├── dashboard/         # Zone principale
│   └── header/            # Header non utilisé
├── services/
│   └── bank.service.ts    # Appels HTTP (ou mock selon l'environnement)
├── models/
│   ├── client.model.ts
│   ├── account.model.ts
│   └── transaction.model.ts
└── mocks/
    └── bank.mock.ts       # Données fictives pour la démo
```

---

## Lancer en local

```bash
npm install
ng serve
```

L'application tourne sur `http://localhost:4200`.

Par défaut en développement, l'application appelle l'API Spring Boot sur `http://localhost:8080`. Pour utiliser les données mockées, modifier `src/environments/environment.development.ts` :

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  useMock: true
};
```

---

## Projet associé — bank-api

Ce front-end fait partie d'un projet full-stack avec [bank-api](https://github.com/donovan-cartier/bank-api), le back-end Spring Boot qui expose les données via une API REST.

En production, les deux projets fonctionnent ensemble :

```
bank-dashboard (Angular)  ──►  bank-api (Spring Boot)  ──►  PostgreSQL
```

La démo live utilise des données mockées pour ne pas nécessiter de serveur actif. Pour faire tourner le projet en conditions réelles, lancer `bank-api` en local et configurer `useMock: false` dans l'environnement de développement.
