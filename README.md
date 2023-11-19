#### Progetto didattico

# Design Token
I design tokens sono elementi chiave nel processo di design system, rappresentando i mattoni fondamentali dell'aspetto visivo di un'interfaccia. Essi includono colori, tipografia, spaziatura e altri attributi che consentono una coerenza visiva e facilitano la manutenzione del design in un progetto.


#### 🚀 Creazione dei Design Tokens
I design tokens vengono creati definendo un set di regole e standard per i valori di design. Questi valori vengono organizzati e documentati in modo strutturato, fornendo una base solida per la coerenza del design in tutto il progetto.


#### 🎾 Trasformazione dei Design Token in variabili per lo sviluppo
Per implementare i design tokens nello sviluppo, è possibile utilizzare la libreria Style Dictionary (https://amzn.github.io/style-dictionary/#/) di Amazon. Questa libreria consente di trasformare facilmente i design tokens in variabili utilizzabili nel codice, garantendo coerenza tra il design e l'implementazione.

................................................................................................................................................................................

## 🟡 🟣 🔵 Tipologie di Design Token
I Design Token sono tutti i valori utili a costruire un sistema di progettazione. Definiti come gettoni poichè rispecchiano in maniera atomica tutti gli attributi estetici che costituiscono i componenti del Design system. Sono espressi in valori e fanno riferimento a: colori, tipografia, spaziature, animazioni e qualsiasi altro attributo di stile definito in fase di design. 


#### 🟡 Design Token Globali
I token globali costituiscono tutti quei valori che sono “assoluti”, non dipendenti da nessun altro valore e da cui possono essere definiti token figli. Sono i valori primitivi e da questi vengono declinati i token alias.
In genere si definiscono globali gli attributi primari come: colore, tipografia e valori delle animazioni.

#### Obiettivo token globali
- Definiamo i token globali per costituire le radici da cui verranno discenderanno i token alias e i token specifici di componente

##### Regole Name Convention token-globale
🟡 primary-000
{ attributo } - { valore numerico in ordine crescente }

................................................................................................................................................................................

#### 🟣 Design Token Alias
I token alias costituiscono tutti quei token che discendono dai token globali e che hanno una specifica responsabilità. Possono far riferimento ad uno specifico contesto o azione. Sono utili per comunicare lo scopo del token e quindi rendere chiaro il contesto di utilizzo.

#### Obiettivo Token Alias
- Definiamo i token alias per fornire informazioni relative al contesto di utilizzo di ciascun token, specifichiamo il loro scopo e cerchiamo di renderli “riutilizzabili” in più casi d’uso.

##### Regole Name Convention token-alias
🟣 interactive-accent-default
{ contesto } - { attributo } - { informazione aggiuntiva }

................................................................................................................................................................................

#### 🔵 Design Token Specifico di componente
I token specifici del componente costituiscono i token che rappresentano proprietà associate ad un componente. Anche se hanno lo stesso valore di un token alias il loro scopo è differente: ossia raccontare e definire una specifica proprietà di un componente. Spesso sono declinati da un token alias ma non sempre questa regola deve/può essere applicata. Nel nostro caso eviteremo dove possibile di innestare i token oltre il secondo livello di innesto.

#### Obiettivo Token Specifico di componente
- Definiamo i token specifici di componente con l’obiettivo di fornire un’informazione relativa alle proprietà associate ad un elemento.

##### Regole Name Convention token-specifico-di-componente
🔵 interactive-accent-default
{ contesto } - { attributo } - { informazione aggiuntiva }

********************************************************************************************************************************************************************************

## 1. Scaricare o clonare il repo sul proprio computer
Il progetto completo, inclusi i design tokens e la configurazione per Style Dictionary, è disponibile su GitHub. 
Puoi [🔗 scaricare questo pacchetto](https://github.com/INPS-it/sirio-design-token.git) o clonarlo tramite il terminale.

### 🛠 Strumenti per Developer
Abbiamo trasformato i nostri token tramite la libreria [🔗 Amazon style dictionary](https://amzn.github.io/style-dictionary/#/).


### 👩‍🎨 Strumenti per Designer
#### 1. Scaricare e installare il tool Figma (tool per la progettazione)
Puoi [🔗 scaricare Figma da questo link](https://www.figma.com/downloads/).

#### 2. Scaricare e installare il plugin Figma Token  (plugin utile per la gestione dei Design Token)
Puoi [🔗 scaricare il plugin da questo link](https://www.figma.com/community/plugin/843461159747178978).

********************************************************************************************************************************************************************************