import * as Utopia from 'utopia-api'
import { Background, Flex } from '@h2/new/Layout'

const annotations = {
  Background: {
    component: Background,
    properties: {
      align: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'baseline',
          value: 'baseline',
        },
        {
          label: 'stretch',
          value: 'stretch',
        },
      ]),
      justify: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'between',
          value: 'between',
        },
      ]),
      columns: Utopia.sliderControl(1, 5, 1),
      rows: Utopia.sliderControl(1, 5, 1),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: [
      {
        label: 'Background with placeholders',
        imports: `import { Background } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Background
        columns={2}
      >
        <Placeholder />
        <Placeholder />
      </Background>`,
      },
    ],
  },
  Flex: {
    component: Flex,
    properties: {
      direction: Utopia.popupListControl([
        {
          label: 'row',
          value: 'row',
        },
        {
          label: 'column',
          value: 'column',
        },
        {
          label: 'right',
          value: 'right',
        },
        {
          label: 'down',
          value: 'down',
        },
        {
          label: 'left',
          value: 'left',
        },
        {
          label: 'up',
          value: 'up',
        },
      ]),
      align: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'baseline',
          value: 'baseline',
        },
        {
          label: 'stretch',
          value: 'stretch',
        },
      ]),
      justify: Utopia.popupListControl([
        {
          label: 'start',
          value: 'start',
        },
        {
          label: 'center',
          value: 'center',
        },
        {
          label: 'end',
          value: 'end',
        },
        {
          label: 'between',
          value: 'between',
        },
      ]),
      gap: Utopia.sliderControl(0, 9, 1),
      wrap: Utopia.checkboxControl(),
    },
    focus: 'never',
    inspector: 'hidden',
    variants: [
      {
        label: 'Flex row with placeholders',
        imports: `import { Flex } from '@h2/new/Layout'
          import { Placeholder } from 'utopia-api'`,
        code: `<Flex>
        <Placeholder />
        <Placeholder />
      </Flex>`,
      },
    ],
  },
}

const Components = {
  '/app/components/hydrogen/new/Layout': annotations,
  '@h2/new/Layout': annotations,
}

export default Components
