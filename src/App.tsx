import { useState } from 'react'
import type { ReactNode } from 'react'
import { Mail, ShieldCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalClose,
} from '@/components/ui/Modal'

const colorSwatches = [
  { name: 'Bleu nuit principal', cssVar: '--color-navy-900', hex: '#1A2340' },
  { name: 'Argent chromé clair', cssVar: '--color-silver-300', hex: '#D9D9D9' },
  { name: 'Anthracite chromé', cssVar: '--color-chrome-600', hex: '#4A4A4A' },
  { name: 'Blanc cassé', cssVar: '--color-silver-100', hex: '#F5F5F2' },
  { name: 'Gris chaud', cssVar: '--color-chrome-400', hex: '#A8A096' },
]

function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="mt-1 text-[var(--color-text-muted)]">{description}</p>}
      </div>
      {children}
    </section>
  )
}

function App() {
  const [emailError, setEmailError] = useState('')

  return (
    <div className="min-h-screen bg-[var(--color-surface-muted)]">
      <header className="bg-[var(--color-navy-900)] py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-6">
          <span className="text-chrome-gradient text-4xl font-extrabold tracking-tight">SachaRbone</span>
          <h1 className="text-xl font-medium text-white/90">Design System</h1>
          <p className="max-w-xl text-white/60">
            Premium accessible — Technologique &amp; Humain. Tokens et composants React fondés sur la charte
            de marque SachaRbone.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
        <Section title="Couleurs" description="Palette officielle de la marque.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {colorSwatches.map((c) => (
              <div key={c.cssVar} className="flex flex-col gap-2">
                <div
                  className="h-20 rounded-lg border border-[var(--color-border)]"
                  style={{ background: `var(${c.cssVar})` }}
                />
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{c.hex}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Dégradé métallique</div>
            <div
              className="h-12 rounded-lg"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #D9D9D9 0%, #ffffff 25%, #BCBCBC 50%, #4A4A4A 100%)',
              }}
            />
          </div>
        </Section>

        <Section title="Typographie" description="Montserrat pour les titres, Inter pour le texte courant.">
          <Card>
            <CardContent className="pt-6">
              <h1 className="text-4xl font-bold">Titre principal — H1</h1>
              <h2 className="mt-4 text-2xl font-semibold">Sous-titre — H2</h2>
              <p className="mt-4 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed">
                Inter Regular est utilisée pour les textes courants. Elle assure une lecture fluide, claire
                et agréable sur tous les supports.
              </p>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-text-muted)]">
                Légende et informations secondaires — Inter Medium.
              </p>
            </CardContent>
          </Card>
        </Section>

        <Section title="Boutons">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primaire</Button>
            <Button variant="secondary">Secondaire</Button>
            <Button variant="outline">Contour</Button>
            <Button variant="ghost">Discret</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Petit</Button>
            <Button size="md">Moyen</Button>
            <Button size="lg">
              Grand <ArrowRight className="size-4" />
            </Button>
            <Button isLoading>Chargement</Button>
          </div>
        </Section>

        <Section title="Badges">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="brand">Marque</Badge>
            <Badge variant="neutral">Neutre</Badge>
            <Badge variant="outline">Contour</Badge>
            <Badge variant="success">Actif</Badge>
            <Badge variant="warning">En attente</Badge>
            <Badge variant="danger">Erreur</Badge>
          </div>
        </Section>

        <Section title="Cartes">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <ShieldCheck className="mb-2 size-6 text-[var(--color-navy-900)]" />
                <CardTitle>Transparence</CardTitle>
                <CardDescription>Une communication claire et honnête.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Chaque interaction reflète nos valeurs : proximité, éthique et accessibilité.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SachaRbone Services</CardTitle>
                <CardDescription>Premium accessible — Technologique &amp; Humain.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="neutral">Conseil</Badge>
                <Badge variant="neutral">Technologies</Badge>
                <Badge variant="neutral">Services</Badge>
              </CardContent>
              <CardFooter>
                <Button size="sm">Contacter</Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        <Section title="Champs de formulaire">
          <div className="grid max-w-md gap-6">
            <Input label="Nom complet" placeholder="Sacha Rbone" />
            <Input
              label="Adresse courriel"
              type="email"
              placeholder="contact@sacharbone.com"
              helperText="Nous ne partageons jamais votre courriel."
              error={emailError}
              onChange={(e) => setEmailError(e.target.value.includes('@') ? '' : 'Adresse courriel invalide')}
            />
            <Input label="Champ désactivé" disabled placeholder="Non disponible" />
          </div>
        </Section>

        <Section title="Fenêtre modale">
          <Modal>
            <ModalTrigger asChild>
              <Button>
                <Mail className="size-4" /> Ouvrir la modale
              </Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Confirmer votre demande</ModalTitle>
                <ModalDescription>
                  La vraie réussite, c'est votre satisfaction. Un conseiller vous répondra sous 24h.
                </ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="ghost">Annuler</Button>
                </ModalClose>
                <ModalClose asChild>
                  <Button>Confirmer</Button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Section>
      </main>
    </div>
  )
}

export default App
