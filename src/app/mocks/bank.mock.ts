import { Client } from '../models/client.model';
import { Account } from '../models/account.model';
import { Transaction } from '../models/transaction.model';

export const MOCK_CLIENTS: Client[] = [
  { id: 1, firstName: 'Jean', lastName: 'Dupont', email: 'jean.dupont@example.com' },
  { id: 2, firstName: 'Marie', lastName: 'Martin', email: 'marie.martin@example.com' },
  { id: 3, firstName: 'Pierre', lastName: 'Bernard', email: 'pierre.bernard@example.com' }
];

export const MOCK_ACCOUNTS: Account[] = [
  { id: 1, iban: 'FR00 0000 0000 0000 0000 0000 001', type: 'CHECKING', balance: 2450.00, client: MOCK_CLIENTS[0] },
  { id: 2, iban: 'FR00 0000 0000 0000 0000 0000 002', type: 'SAVINGS', balance: 8900.00, client: MOCK_CLIENTS[0] },
  { id: 3, iban: 'FR00 0000 0000 0000 0000 0000 003', type: 'CHECKING', balance: 540.75, client: MOCK_CLIENTS[1] },
  { id: 4, iban: 'FR00 0000 0000 0000 0000 0000 004', type: 'SAVINGS', balance: 15200.00, client: MOCK_CLIENTS[1] },
  { id: 5, iban: 'FR00 0000 0000 0000 0000 0000 005', type: 'CHECKING', balance: 3100.00, client: MOCK_CLIENTS[2] },
  { id: 6, iban: 'FR00 0000 0000 0000 0000 0000 006', type: 'SAVINGS', balance: 4750.50, client: MOCK_CLIENTS[2] }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 1,  amount: 1800, type: 'CREDIT', description: 'Virement salaire',      date: new Date('2026-03-01'), account: MOCK_ACCOUNTS[0] },
  { id: 2,  amount: 650,  type: 'DEBIT',  description: 'Paiement loyer',        date: new Date('2026-03-02'), account: MOCK_ACCOUNTS[0] },
  { id: 3,  amount: 80,   type: 'DEBIT',  description: 'Facture électricité',   date: new Date('2026-03-05'), account: MOCK_ACCOUNTS[0] },
  { id: 4,  amount: 45,   type: 'DEBIT',  description: 'Abonnement internet',   date: new Date('2026-03-06'), account: MOCK_ACCOUNTS[0] },
  { id: 5,  amount: 200,  type: 'DEBIT',  description: 'Courses alimentaires',  date: new Date('2026-03-10'), account: MOCK_ACCOUNTS[0] },
  { id: 6,  amount: 120,  type: 'DEBIT',  description: 'Station carburant',     date: new Date('2026-03-12'), account: MOCK_ACCOUNTS[0] },
  { id: 7,  amount: 500,  type: 'CREDIT', description: 'Virement depuis épargne', date: new Date('2026-03-14'), account: MOCK_ACCOUNTS[0] },
  { id: 8,  amount: 35,   type: 'DEBIT',  description: 'Abonnement streaming',  date: new Date('2026-03-15'), account: MOCK_ACCOUNTS[0] },

  { id: 9,  amount: 500,  type: 'CREDIT', description: 'Dépôt épargne mensuel', date: new Date('2026-03-01'), account: MOCK_ACCOUNTS[1] },
  { id: 10, amount: 200,  type: 'DEBIT',  description: 'Virement vers courant', date: new Date('2026-03-14'), account: MOCK_ACCOUNTS[1] },
  { id: 11, amount: 1000, type: 'CREDIT', description: 'Remboursement impôts',  date: new Date('2026-03-18'), account: MOCK_ACCOUNTS[1] },
  { id: 12, amount: 150,  type: 'CREDIT', description: 'Cadeau reçu',           date: new Date('2026-03-19'), account: MOCK_ACCOUNTS[1] },

  { id: 13, amount: 1750, type: 'CREDIT', description: 'Virement salaire',      date: new Date('2026-03-01'), account: MOCK_ACCOUNTS[2] },
  { id: 14, amount: 630,  type: 'DEBIT',  description: 'Paiement loyer',        date: new Date('2026-03-03'), account: MOCK_ACCOUNTS[2] },
  { id: 15, amount: 60,   type: 'DEBIT',  description: 'Facture eau',           date: new Date('2026-03-07'), account: MOCK_ACCOUNTS[2] },
  { id: 16, amount: 90,   type: 'DEBIT',  description: 'Facture téléphone',     date: new Date('2026-03-08'), account: MOCK_ACCOUNTS[2] },
  { id: 17, amount: 180,  type: 'DEBIT',  description: 'Courses alimentaires',  date: new Date('2026-03-09'), account: MOCK_ACCOUNTS[2] },
  { id: 18, amount: 250,  type: 'CREDIT', description: 'Paiement prestation',   date: new Date('2026-03-16'), account: MOCK_ACCOUNTS[2] },

  { id: 19, amount: 800,  type: 'CREDIT', description: 'Dépôt épargne mensuel', date: new Date('2026-03-01'), account: MOCK_ACCOUNTS[3] },
  { id: 20, amount: 300,  type: 'CREDIT', description: 'Retour sur investissement', date: new Date('2026-03-10'), account: MOCK_ACCOUNTS[3] },
  { id: 21, amount: 500,  type: 'DEBIT',  description: 'Assurance habitation',  date: new Date('2026-03-15'), account: MOCK_ACCOUNTS[3] },

  { id: 22, amount: 2100, type: 'CREDIT', description: 'Virement salaire',      date: new Date('2026-03-01'), account: MOCK_ACCOUNTS[4] },
  { id: 23, amount: 700,  type: 'DEBIT',  description: 'Paiement loyer',        date: new Date('2026-03-02'), account: MOCK_ACCOUNTS[4] },
  { id: 24, amount: 95,   type: 'DEBIT',  description: 'Facture électricité',   date: new Date('2026-03-04'), account: MOCK_ACCOUNTS[4] },
  { id: 25, amount: 55,   type: 'DEBIT',  description: 'Abonnement internet',   date: new Date('2026-03-06'), account: MOCK_ACCOUNTS[4] },
  { id: 26, amount: 320,  type: 'DEBIT',  description: 'Courses alimentaires',  date: new Date('2026-03-09'), account: MOCK_ACCOUNTS[4] },
  { id: 27, amount: 400,  type: 'CREDIT', description: 'Prime exceptionnelle',  date: new Date('2026-03-17'), account: MOCK_ACCOUNTS[4] },

  { id: 28, amount: 600,  type: 'CREDIT', description: 'Dépôt épargne mensuel', date: new Date('2026-03-01'), account: MOCK_ACCOUNTS[5] },
  { id: 29, amount: 200,  type: 'CREDIT', description: 'Intérêts versés',       date: new Date('2026-03-10'), account: MOCK_ACCOUNTS[5] },
  { id: 30, amount: 1000, type: 'DEBIT',  description: 'Réparation véhicule',   date: new Date('2026-03-13'), account: MOCK_ACCOUNTS[5] }
];