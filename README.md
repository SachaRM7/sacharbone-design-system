# SachaRbone Design System

Design system React + TypeScript basé sur la charte graphique SachaRbone Services
(bleu nuit / chromé, typographie Montserrat + Inter).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (tokens définis dans `src/index.css` via `@theme`)
- `class-variance-authority` pour les variants de composants
- Radix UI (`@radix-ui/react-dialog`) pour la Modal, accessible au clavier

## Démarrer

```bash
npm install
npm run dev      # aperçu local
npm run build    # build de production + vérification des types
```

## Tokens

| Token | Fichier |
|---|---|
| Couleurs | `src/tokens/colors.ts`, `src/index.css` (`@theme`) |
| Typographie | `src/tokens/typography.ts` |
| Espacements | `src/tokens/spacing.ts` (échelle Tailwind par défaut, base 0.25rem) |
| Rayons de bordure | `src/tokens/radius.ts` |

Palette officielle :

| Couleur | Hex |
|---|---|
| Bleu nuit principal | `#1A2340` |
| Argent chromé clair | `#D9D9D9` |
| Anthracite chromé | `#4A4A4A` |
| Blanc cassé | `#F5F5F2` |
| Gris chaud | `#A8A096` |

## Composants

Tous les composants sont dans `src/components/ui/` et exportés depuis
`src/components/ui/index.ts` :

- `Button` — variants `primary | secondary | outline | ghost | danger`, tailles `sm | md | lg`, état `isLoading`
- `Card` — `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `Input` — avec `label`, `helperText`, `error`
- `Badge` — variants `brand | neutral | outline | success | warning | danger`
- `Modal` — basé sur Radix Dialog (`Modal`, `ModalTrigger`, `ModalContent`, `ModalHeader`, `ModalTitle`, `ModalDescription`, `ModalFooter`, `ModalClose`)

`src/App.tsx` sert de guide de style vivant montrant l'ensemble des tokens et composants.
