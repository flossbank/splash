import PageWrapper from '../components/common/pageWrapper'
import SelectTierSection from '../components/select/select_tier_section'

const Select = () => (
  <PageWrapper
    title='Select Your Support Level'
    description='Decide how you support the open source maintainers of your installed packages with Flossbank.'
  >
    <SelectTierSection />
  </PageWrapper>
)

export default Select
