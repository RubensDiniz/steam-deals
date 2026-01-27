'use client'
import { useCallback, useMemo, useState } from 'react'
import { getTrackBackground, Range } from 'react-range'
import {
  Mark,
  RangeContainer,
  RangeHeader,
  RangeInnerTrack,
  RangeOuterTrack,
  RangeThumb,
  RangeWrapper,
} from './styles'
import { ListPriceRangeProps } from './types'
import { IRenderMarkParams, IRenderTrackParams } from 'react-range/lib/types'

// TODO! Look at SpanSelectorField
export const ListPriceRange = ({ onUpdateRange }: ListPriceRangeProps) => {
  const [rangeValues, setRangeValues] = useState([0, 15])

  const handleChange = useCallback((values: number[]) => {
    if (values[0] < values[1]) setRangeValues(values)
  }, [])

  const handleFinalChange = useCallback(
    (values: number[]) => {
      onUpdateRange((prevState) => {
        const map = new Map(prevState)
        map.set('lowerPrice', values[0] - 0.02)
        map.set('upperPrice', values[1] - 0.02)
        return map
      })
    },
    [onUpdateRange]
  )

  const formatPrice = useCallback(
    (value: number) => (Number.isInteger(value) ? value.toString() : value.toFixed(2)),
    []
  )

  const priceStep = 2.5

  const trackBackground = useMemo(
    () =>
      getTrackBackground({
        values: rangeValues,
        colors: ['#454d5a', '#66c0f4', '#454d5a'],
        min: 0,
        max: 50,
      }),
    [rangeValues]
  )

  const renderTrack = useCallback(
    ({ props, children }: IRenderTrackParams) => (
      <RangeOuterTrack onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart}>
        <RangeInnerTrack ref={props.ref} style={{ background: trackBackground }}>
          {children}
        </RangeInnerTrack>
      </RangeOuterTrack>
    ),
    [trackBackground]
  )

  const renderMark = useCallback(
    ({ props, index }: IRenderMarkParams) => {
      const value = index * priceStep
      if (value % 5 !== 0) return null

      return (
        <Mark
          {...props}
          key={props.key}
          style={{
            ...props.style,
            color: rangeValues[0] <= value && value <= rangeValues[1] ? '#f3f4f6' : '#454d5a',
          }}
        >
          {value}
        </Mark>
      )
    },
    [rangeValues]
  )

  // TODO! Show all price steps on higher resolutions?
  return (
    <RangeContainer>
      <RangeHeader>
        <span>Price Range</span>
        <span className="price">
          ${formatPrice(rangeValues[0])} - ${formatPrice(rangeValues[1])}
        </span>
      </RangeHeader>
      <RangeWrapper>
        <Range
          values={rangeValues}
          step={priceStep}
          min={0}
          max={50}
          onChange={handleChange}
          onFinalChange={handleFinalChange}
          renderTrack={renderTrack}
          renderMark={renderMark}
          renderThumb={({ props }) => <RangeThumb {...props} key={props.key} type="button" />}
        />
      </RangeWrapper>
    </RangeContainer>
  )
}
