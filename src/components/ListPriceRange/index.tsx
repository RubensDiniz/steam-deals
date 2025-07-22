'use client'
import { useState } from 'react'
import { getTrackBackground, Range } from 'react-range'
import { Mark, RangeInnerTrack, RangeOuterTrack, RangeThumb } from './styles'
import { ListPriceRangeProps } from '@/components/ListPriceRange/types'

// TODO! Look at SpanSelectorField
export const ListPriceRange = ({ onUpdateRange }: ListPriceRangeProps) => {
  const [rangeValues, setRangeValues] = useState([0, 15])

  const handleChange = (values: number[]) => {
    if (values[0] < values[1]) setRangeValues(values)
  }

  const handleFinalChange = (values: number[]) => {
    onUpdateRange((prevState) => {
      const map = new Map(prevState)
      map.set('lowerPrice', values[0] - 0.02)
      map.set('upperPrice', values[1] - 0.02)
      return map
    })
  }

  const priceStep = 2.5

  return (
    <Range
      values={rangeValues}
      step={priceStep}
      min={0}
      max={50}
      onChange={handleChange}
      onFinalChange={handleFinalChange}
      renderTrack={({ props, children }) => (
        <RangeOuterTrack onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart}>
          <RangeInnerTrack
            ref={props.ref}
            style={{
              background: getTrackBackground({
                values: rangeValues,
                colors: ['gray', 'white', 'gray'],
                min: 0,
                max: 50,
              }),
            }}
          >
            {children}
          </RangeInnerTrack>
        </RangeOuterTrack>
      )}
      renderThumb={({ props }) => <RangeThumb {...props} key={props.key} type="button" />}
      renderMark={({ props, index }) => (
        <Mark
          {...props}
          key={props.key}
          style={{
            ...props.style,
            color:
              rangeValues[0] <= index * priceStep && index * priceStep <= rangeValues[1]
                ? 'white'
                : 'gray',
          }}
        >
          {(index * priceStep) % 5 === 0 ? index * priceStep : ''}
        </Mark>
      )}
    />
  )
}
