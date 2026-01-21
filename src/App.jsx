import { useState } from 'react'
import './ariesGold.css'
import {
  YouTubeSection,
  HeroSection,
  CollabSection,
  BestMaterialsSection,
  CollectionsSection,
  CategorySection,
  InstagramSection,
  InfoSection,
  TestimonialSection,
  ImageModal,
  WarrantyModal,
} from './components/AriesGoldComponents'

function App() {
  const [modalImageOpen, setModalImageOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [warrantyModalOpen, setWarrantyModalOpen] = useState(false)

  const handleCollabImageClick = (imageSrc) => {
    setModalImageSrc(imageSrc)
    setModalImageOpen(true)
  }

  const handleCloseImageModal = () => {
    setModalImageOpen(false)
  }

  const handleOpenWarrantyModal = () => {
    setWarrantyModalOpen(true)
  }

  const handleCloseWarrantyModal = () => {
    setWarrantyModalOpen(false)
  }

  return (
    <div className="wrapper">
      <YouTubeSection variant="default" />
      <HeroSection onGaransiClick={handleOpenWarrantyModal} />
      
      <WarrantyModal isOpen={warrantyModalOpen} onClose={handleCloseWarrantyModal} />
    </div>
  )
}

export default App
